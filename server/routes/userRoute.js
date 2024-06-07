const validate = require('../middleware/validator.middleware')
const { validateSignUpInput } = require('../validators')
const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Newsletter = require('../models/newsletter')
const { generateHash } = require('../util')

router.post('/register', validate(validateSignUpInput), async (req, res) => {
  try {
    const body = req.body
    console.log('request body', body)
    const hashPassword = generateHash(req.body.password)
    const findUsers = await User.find({
      $or: [{ email: body.email }]
    })
    if (findUsers.length > 0) {
      return res
        .status(400)
        .json({
          message: 'A user with that credentials (email) already exists!'
        })
    }
    if (body.newsletter === true) {
      const findEmail = await Newsletter.find({
        $or: [{ email: body.email }]
      })
      if (!findEmail) {
        const newsletterSubscription = await Newsletter.create({
          email: body.email
        })
      }
    }
    const user = await User.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      role: body.role,
      country: body.country,
      countryCode: body.countryCode,
      state: body.state,
      city: body.city,
      password: hashPassword,
      address: body.address,
      company: body.company,
      vatTaxId: body.vatTaxId,
      postalCode: body.postalCode
    })
    console.log('db user created', user);
    res.send('User Registered Successfully')
  } catch (error) {
    console.log('error', error);
    return res
      .status(400)
      .json({ message: 'An error occurred, try registering again a new user' })
  }
})

module.exports = router

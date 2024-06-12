const validate = require('../middleware/validator.middleware')
const {
  validateSignUpInput,
  validateVerifyEmailInput,
  validateSigninInput
} = require('../validators')
const express = require('express')
const router = express.Router()
const multer = require('multer')
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
const User = require('../models/user')
const Session = require('../models/session')
const Newsletter = require('../models/newsletter')
const {
  generateHash,
  generateVerificationCode,
  getAuthTokens
} = require('../util')
const eventManager = require('../event')
const { verifyRefreshToken } = require('../middleware/auth.middleware')
const bcrypt = require('bcryptjs')
const { verifyAuthToken } = require('../middleware/auth.middleware') //to verify if user is logged in
const { verifyRole } = require('../middleware/role.middleware') //to verify user role

//multer configuration for single user profile image upload - would exclude later from here

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../server/uploads/profile')
  },
  filename: function (req, file, cb) {
    const randomName = crypto.randomBytes(16).toString('hex') // Generate a random string
    const ext = path.extname(file.originalname) // Get the file extension
    cb(null, `${randomName}${ext}`) // Combine them to create the new filename
  }
})

const uploadOptions = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (!file.mimetype.match(/jpeg|jpg|png$/)) {
      return cb(new Error('Only .png, .jpg, and .jpeg files are allowed.'))
    }
    cb(null, true)
  },
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB
})

// register user
router.post('/register', validate(validateSignUpInput), async (req, res) => {
  try {
    const body = req.body
    console.log('body', body)
    // hash password
    const hashPassword = generateHash(req.body.password)

    // user device
    const device = req.headers['user-agent']
    console.log('device', device)

    // user ip
    const ip = req.ip
    console.log('ip', ip)

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email: body.email })
    if (existingUser) {
      return res.status(400).json({
        message: 'A user with that credentials (email) already exists!'
      })
    }

    // Create newsletter subscription if opted in
    if (body.newsletter) {
      const findEmail = await Newsletter.findOne({ email: body.email })
      if (!findEmail) {
        const newsletterSubscription = await Newsletter.create({
          email: body.email
        })
      }
    }

    //generate verification code
    const verificationCode = generateVerificationCode()

    // store user in db
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
      postalCode: body.postalCode,
      verificationString: verificationCode,
      googleID: 'test123',
      lastLoginIpAddress: ip,
      lastLoginDate: new Date(),
      lastLoginDevice: device,
      image: 'c://user//test.jpg',
      averageDeliveryTime: 2,
      completionRate: 0,
      rating: 4,
      availability: true,
      driverLicenseId: '09876543KJH97685',
      vehicleNo: 'ABC-345-ADS',
      vehicleType: 'Truck'
    })

    console.log('user', user)

    // Generate authentication tokens
    const currentUser = {
      name: user.name,
      email: user.email,
      isBlocked: user.isBlocked,
      role: user.role,
      phone: user.phone,
      country: user.country,
      countryCode: user.countryCode,
      state: user.state,
      city: user.city,
      company: user.company,
      address: user.address,
      vatTaxId: user.vatTaxId,
      lastLoginIpAddress: user.lastLoginIpAddress,
      lastLoginDate: user.lastLoginDate,
      lastLoginDevice: user.lastLoginDevice,
      image: user.image,
      _id: user._id
    }

    console.log('currentUser', currentUser)

    const token = generateHash(user._id.toString())

    console.log('token', token)

    const { accessToken, accessTokenExpiry, refreshToken } =
      await getAuthTokens({
        ...currentUser,
        token
      })

    // Prepare response object
    const obj = {
      ...currentUser,
      accessToken,
      accessTokenExpiry,
      refreshToken
    }

    console.log('obj', obj)

    // Store session information
    const sessionObj = {
      device,
      ip,
      userId: user._id,
      token,
      email: user.email
    }

    console.log('sessionObj', sessionObj)

    await Session.create(sessionObj)

    //event emitter to send verification email
    eventManager.emit('register_user_email_verification_notification', {
      ...user._doc
    }) //send verification code to user email

    // Respond with success message and user details
    res.status(200).json({ message: 'User registered successfully', user: obj })
  } catch (error) {
    console.log('register route error', error)
    return res
      .status(400)
      .json({ message: 'An error occurred, try registering again a new user' })
  }
})

// verify email route
router.put(
  '/verify-email',
  validate(validateVerifyEmailInput),
  async (req, res) => {
    try {
      // user device
      const device = req.headers['user-agent']
      console.log('device', device)

      // user ip
      const ip = req.ip
      console.log('ip', ip)

      const { verificationString } = req.body
      if (verificationString < 6) {
        return res.status(401).json({
          message: 'Verification code length must be 6 characters.'
        })
      }

      if (verificationString > 6) {
        return res.status(401).json({
          message: 'Verification code above required'
        })
      }

      const result = await User.findOne({
        verificationString
      })

      if (!result) {
        return res.status(401).json({
          message: 'Invalid verification code.'
        })
      }

      const { _id: id, name, email } = result
      const updateUser = await User.findOneAndUpdate(
        {
          _id: id
        },
        { $set: { isVerified: true } }
      )

      // Update user's last login details
      await User.updateOne(
        { _id: id },
        {
          lastLoginIpAddress: ip,
          lastLoginDate: new Date(),
          lastLoginDevice: device
        }
      )

      // Generate authentication tokens
      const currentUser = {
        name: result.name,
        email: result.email,
        isBlocked: result.isBlocked,
        role: result.role,
        phone: result.phone,
        country: result.country,
        countryCode: result.countryCode,
        state: result.state,
        city: result.city,
        company: result.company,
        address: result.address,
        vatTaxId: result.vatTaxId,
        lastLoginIpAddress: ip,
        lastLoginDate: new Date(),
        lastLoginDevice: device,
        image: result.image,
        _id: result._id
      }

      const token = generateHash(result._id.toString())
      const { accessToken, accessTokenExpiry, refreshToken } =
        await getAuthTokens({
          ...currentUser,
          token
        })

      // Prepare response object
      const obj = {
        ...currentUser,
        accessToken,
        accessTokenExpiry,
        refreshToken
      }

      // welcome email dispatch
      eventManager.emit('new_user_verified', { ...result._doc })
      res
        .status(200)
        .json({ message: 'Email Verified Successfully', user: obj })
    } catch (error) {
      console.log('verify email route error', error)
      return res.status(400).json({
        message: 'An error occurred verifying user email, please try again.'
      })
    }
  }
)

// resend verification mail
router.put('/resend-verification-email', async (req, res) => {
  try {
    const { email } = req.body
    // Find the user by email address
    const user = await User.findOne({ email })

    // If user not found, return error
    if (!user) {
      return res.status(400).json({ message: 'User not found.' })
    }

    // If already verified, return error
    if (user.isVerified) {
      return res.status(400).json({ message: 'User already verified.' })
    }

    // send new verification email
    eventManager.emit('resend_user_email_verification_code', { ...user._doc })
    res.status(200).json({ message: 'Verification Code Sent Successfully' })
  } catch (error) {
    console.log('resend verification email error', error)
    return res.status(400).json({
      message:
        'An error occurred resending user verification code, please try again.'
    })
  }
})

// login route
router.post('/login', validate(validateSigninInput), async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body
    // user device
    const device = req.headers['user-agent']
    console.log('device', device)

    // user ip
    const ip = req.ip
    console.log('ip', ip)

    // fetch user from db
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        message: 'Wrong credentials provided!'
      })
    }

    // load hash from password db
    const checker = bcrypt.compareSync(password, user.password)

    if (!checker) {
      return res.status(400).json({
        message: 'Wrong credentials provided!'
      })
    }

    // check if user is blocked
    if (user.isBlocked) {
      return res.status(401).json({
        message: 'Sorry your account is suspended, please contact Admin!'
      })
    }

    // check if user email is verified (2FA)
    if (!user.isVerified) {
      const emailVerificationRedirect = `user/verify-email?email=${encodeURIComponent(
        user.email
      )}`
      console.log('emailVerificationRedirect', emailVerificationRedirect)
      return res.status(401).json({
        message: 'Email not verified, kindly verify your email',
        redirect: emailVerificationRedirect
      })
    }

    // Update user's last login details
    await User.updateOne(
      { _id: user._id },
      {
        lastLoginIpAddress: ip,
        lastLoginDate: new Date(),
        lastLoginDevice: device
      }
    )

    // Generate authentication tokens
    const currentUser = {
      name: user.name,
      email: user.email,
      isBlocked: user.isBlocked,
      role: user.role,
      phone: user.phone,
      country: user.country,
      countryCode: user.countryCode,
      state: user.state,
      city: user.city,
      company: user.company,
      address: user.address,
      vatTaxId: user.vatTaxId,
      lastLoginIpAddress: ip,
      lastLoginDate: new Date(),
      lastLoginDevice: device,
      image: user.image,
      _id: user._id
    }

    console.log('currentUser', currentUser)

    const token = generateHash(user._id.toString())

    console.log('token', token)

    const { accessToken, accessTokenExpiry, refreshToken } =
      await getAuthTokens({
        ...currentUser,
        token
      })

    // Prepare response object
    const obj = {
      ...currentUser,
      accessToken,
      accessTokenExpiry,
      refreshToken
    }

    console.log('obj', obj)

    // Store session information
    const sessionObj = {
      device,
      ip,
      userId: user._id,
      token,
      email: user.email
    }

    console.log('sessionObj', sessionObj)

    await Session.create(sessionObj)

    //event emitter to send login notification email
    eventManager.emit('login_notification', {
      ...user._doc
    })

    // Respond with success message and user details
    res.status(200).json({ message: 'Login successful', user: obj })
  } catch (error) {
    console.log('login route error', error)
    return res
      .status(400)
      .json({ message: 'An error occurred, try again or refresh page.' })
  }
})

// password reset route
router.patch('/update/password', verifyAuthToken, async (req, res) => {
  try {
    const email = req.body.email
    const password = generateHash(req.body.password)
    const hashPassword = password
    const user = await User.find({ email })

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' })
    }

    const result = await User.findOneAndUpdate(
      { email },
      { password: hashPassword }
    )

    //event emitter to send password reset notification email
    eventManager.emit('update_password_notification', {
      ...user._doc
    })

    res.status(200).json({ message: 'Password changed successfully' })
  } catch (error) {
    console.log('update password error', error)
    return res.status(400).json({
      message: 'An error occurred, please try again.'
    })
  }
})

// Get users profile
router.get('/profile', verifyAuthToken, async (req, res) => {
  try {
    const { email } = req.query
    // user device
    const device = req.headers['user-agent']
    // user ip
    const ip = req.ip
    console.log('req.query', req.query)
    // Fetch user by email or _id
    let user
    if (email) {
      user = await User.findOne({ email }).select('-password')
      console.log('user', user)
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Generate authentication tokens
    const currentUser = {
      name: user.name,
      email: user.email,
      isBlocked: user.isBlocked,
      role: user.role,
      phone: user.phone,
      country: user.country,
      countryCode: user.countryCode,
      state: user.state,
      city: user.city,
      company: user.company,
      address: user.address,
      vatTaxId: user.vatTaxId,
      lastLoginIpAddress: ip,
      lastLoginDate: new Date(),
      lastLoginDevice: device,
      image: user.image,
      _id: user._id
    }

    const token = generateHash(user._id.toString())

    const { accessToken, accessTokenExpiry, refreshToken } =
      await getAuthTokens({
        ...currentUser,
        token
      })

    // Prepare response object
    const obj = {
      ...currentUser,
      accessToken,
      accessTokenExpiry,
      refreshToken
    }

    res.status(200).json(obj)
  } catch (error) {
    console.error('Error fetching user profile:', error)
    res.status(500).json({ message: 'An error occurred, please try again.' })
  }
})

//profile update route
router.patch(
  '/update/profile',
  verifyAuthToken,
  uploadOptions.single('image'),
  async (req, res) => {
    try {
      const { name, company, address, postalCode, phone, vatTaxId, email } =
        req.body
      const newImage = req.file ? req.file.filename : null
      const user = await User.findOne({ email })

      if (!newImage)
        return res
          .status(404)
          .json({ message: 'No image found in the request' })

      if (!user) {
        return res.status(400).json({ message: 'User does not exist' })
      }

      // If there's a new image, delete the old one
      if (user.image && newImage) {
        const oldImagePath = user.image
          ? path.join(
              __dirname,
              '../uploads/profile',
              path.basename(user.image)
            )
          : null

        if (oldImagePath && fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath)
        }
        const fileName = newImage
        const basePath = `${req.protocol}://${req.get('host')}/uploads/profile/`
        user.image = `${basePath}${fileName}`
      }

      user.name = name || user.name
      user.company = company || user.company
      user.address = address || user.address
      user.postalCode = postalCode || user.postalCode
      user.phone = phone || user.phone
      user.vatTaxId = vatTaxId || user.vatTaxId

      await user.save()

      res.status(200).json({ message: 'Profile updated successfully', user })
    } catch (error) {
      console.log('update profile error', error)
      return res
        .status(400)
        .json({ message: 'An error occured, please try again.' })
    }
  }
)

//  route to refresh authentication tokens
router.post('/refresh/token', verifyRefreshToken, async (req, res) => {
  try {
    console.log({
      userId: req.user.userId,
      token: req.user.token
    })
    // Extract user ID and token from the request
    const userId = req.user.userId
    const token = req.user.token

    // Find the session associated with the user ID and token
    const session = await Session.findOne({ userId, token }).sort({ _id: 1 })

    // If session doesn't exist or is not active, return a 403 Forbidden response
    if (!session || !session.isActive) {
      return res.status(403).json({
        message: 'Sorry, login to continue. Authentication is required'
      })
    }

    // Find the user by user ID
    const _user = await User.findById({ _id: userId })

    // If user doesn't exist or is blocked, return a 401 Unauthorized response
    if (_user && _user.isBlocked) {
      return res.status(401).json({
        message: 'Sorry, your account is suspended. Please contact admin'
      })
    }

    // Generate authentication tokens for the user
    const currentUser = {
      name: _user.name,
      email: _user.email,
      isBlocked: _user.isBlocked,
      role: _user.role,
      phone: _user.phone,
      country: _user.country,
      countryCode: _user.countryCode,
      state: _user.state,
      city: _user.city,
      company: _user.company,
      address: _user.address,
      vatTaxId: _user.vatTaxId,
      lastLoginIpAddress: _user.lastLoginIpAddress,
      lastLoginDate: _user.lastLoginDate,
      lastLoginDevice: _user.lastLoginDevice,
      image: _user.image,
      _id: _user._id
    }

    const { accessToken, accessTokenExpiry, refreshToken } =
      await getAuthTokens({
        ...currentUser,
        token
      })

    // Construct response object with updated authentication tokens and user details
    const user = {
      ...currentUser,
      accessToken,
      accessTokenExpiry,
      refreshToken
    }

    // Log the constructed response object
    console.log('Response Object:', user)

    // Send the response with the updated authentication tokens and user details
    return res.send(user)
  } catch (error) {
    console.error('Error during token refresh:', error)
    // If an error occurs, return a 400 Bad Request response
    return res
      .status(400)
      .json({ message: 'Sorry, an error occurred. Please try again later' })
  }
})

// logout route
router.patch(
  '/logout',
  verifyRefreshToken,
  verifyAuthToken,
  async (req, res) => {
    try {
      // fetch token
      const token = req.user.token

      // update session model
      await Session.updateMany({ token }, { isActive: false })

      // send feedback
      res.status(200).json({ message: 'Logout Successful' })
    } catch (error) {
      console.log('logout error', error)
      return res.status(400).json({
        message: 'An error occurred, please try again.'
      })
    }
  }
)

module.exports = router

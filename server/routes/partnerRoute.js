const express = require('express')
const router = express.Router()
const Partner = require('../models/partner') // Adjust the path as necessary
const eventManager = require('../event')
const { verifyAuthToken } = require('../middleware/auth.middleware') //to verify if user is logged in
const { verifyRole } = require('../middleware/role.middleware') //to verify user role
const { validateAddPartnerInput } = require('../validators')

// Route to get all partners
router.get(
  '/all-partners',
  verifyAuthToken,
  verifyRole(['Admin', 'SuperAdmin']),
  async (req, res) => {
    try {
      const partners = await Partner.find({})
      console.log('partners', partners)
      res.status(200).json(partners)
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch partners', error })
    }
  }
)

// Route to add a new partner
router.post(
  '/add-partner',
  verifyAuthToken,
  verifyRole(['Admin', 'SuperAdmin']),
  validateAddPartnerInput,
  async (req, res) => {
    console.log('parter request', req.body)
    const {partnerName, phoneNumber, email, servicesOffered, address, country, countryCode, user} = req.body;

    // Check if partner with the same email already exists
    const existingPartner = await Partner.findOne({ email })
    if (existingPartner) {
      return res.status(400).json({
        message: 'A partner with that credentials (email) already exists!'
      });
    }

    try {
      const partner = await Partner.create({
        partnerName,
        phoneNumber,
        email,
        servicesOffered,
        address,
        country,
        countryCode
      });

      console.log('partner', partner)

      //super admin new partner added email dispatch
      eventManager.emit('super_admin_new_partner_added', { ...partner._doc, user })

      //new partner welcome email dispatch
      eventManager.emit('new_partner_welcome_email', { ...partner._doc })

      res.status(201).json({ message: 'Partner added successfully', partner })
    } catch (error) {
      console.log('error', error)
      res.status(500).json({ message: 'Failed to add partner', error })
    }
  }
)

module.exports = router

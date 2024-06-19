const express = require('express');
const router = express.Router();
const Partner = require('../models/partnerModel'); // Adjust the path as necessary
const eventManager = require('../event')
const { verifyAuthToken } = require('../middleware/auth.middleware') //to verify if user is logged in
const { verifyRole } = require('../middleware/role.middleware') //to verify user role

// Route to get all partners
router.get('/all-partners', verifyAuthToken, verifyRole(['Admin', 'SuperAdmin']),  async (req, res) => {
  try {
    const partners = await Partner.find({});
    res.status(200).json(partners); 
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch partners', error });
  }
});

module.exports = router;

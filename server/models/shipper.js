const mongoose = require('mongoose')

const shipperSchema = new mongoose.Schema({
    shipperName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    countryCode: { type: String, required: true },
    country: { type: String, required: true }
  });
  
  const Shipper = mongoose.model('Shipper', shipperSchema);
  module.exports = Shipper;
  
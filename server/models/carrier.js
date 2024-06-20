const mongoose = require('mongoose')

const carrierSchema = new mongoose.Schema({
    carrierName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    servicesOffered: [String],
    address: { type: String, required: true },
    countryCode: { type: String, required: true },
    country: { type: String, required: true }
  });
  
  const Carrier = mongoose.model('Carrier', carrierSchema);
  module.exports = Carrier;
  
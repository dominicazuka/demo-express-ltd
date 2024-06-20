const mongoose = require('mongoose')

const depotSchema = new mongoose.Schema({
    address: { type: String, required: true },
    countryCode: { type: String, required: true },
    country: { type: String, required: true },
    capacity: { type: Number, required: true },
    inventory: { type: mongoose.Schema.Types.Mixed, required: true } // would house inventory details of list of items stored in depot
  });
  
  const Depot = mongoose.model('Depot', depotSchema);
  module.exports = Depot;
  
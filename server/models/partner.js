const partnerSchema = new mongoose.Schema({
    partnerName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    servicesOffered: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    countryCode: { type: String, required: true }
  }, { timestamps: true });
  
  const Partner = mongoose.model('Partner', partnerSchema);
  module.exports = Partner;
  
const driverSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    company: { type: String },
    address: { type: String, required: true },
    postalCode: { type: String },
    countryCode: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String },
    city: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    driverLicenseId: { type: String, required: true },
    vehicleNo: { type: String, required: true },
    vehicleType: { type: String, required: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    verificationString: { type: String },
    googleID: { type: String },
    lastLoginIpAddress: { type: String },
    lastLoginDate: { type: Date },
    lastLoginDevice: { type: String },
    image: { type: String },
    isBlocked: { type: Boolean, default: false },
    averageDeliveryTime: { type: Number },
    completionRate: { type: Number },
    rating: { type: Number },
    availability: { type: Boolean, default: true }
  },
  { timestamps: true }
)

const Driver = mongoose.model('Driver', driverSchema)
module.exports = Driver;

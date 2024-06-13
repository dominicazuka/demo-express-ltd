const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String },
    address: { type: String, required: true },
    postalCode: { type: String },
    countryCode: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    vatTaxId: { type: String },
    password: {
      type: String,
      required: true,
      minlength: 8, // Minimum length of 8 characters
    },
    role: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: {
      type: Boolean,
      default: false
    },
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
    availability: { type: Boolean, default: true },
    driverLicenseId: { type: String, },
    vehicleNo: { type: String },
    vehicleType: { type: String },
  },
  { timestamps: true }
)

userSchema.pre('save', async () => {})

const User = mongoose.model('User', userSchema)
module.exports = User

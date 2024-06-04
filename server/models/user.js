const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    company: { type: String },
    address: { type: String, required: true },
    postalCode: { type: String },
    countryCode: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    vatTaxId: { type: String },
    password: { type: String, required: true },
    role: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    verificationString: { type: String },
    googleID: { type: String },
    lastLoginIpAddress: { type: String },
    lastLoginDate: { type: Date },
    lastLoginDevice: { type: String },
    image: { type: String },
    isBlocked: { type: Boolean, default: false }
  },
  { timestamps: true }
)

userSchema.pre('save', async () => {})

const User = mongoose.model('User', userSchema)
module.exports = User

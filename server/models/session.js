const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  device: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  email: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;

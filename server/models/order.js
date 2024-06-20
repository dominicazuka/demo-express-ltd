const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // foreign key to user table
    addressInfo: { type: mongoose.Schema.Types.Mixed, required: true }, // would house from address and to address
    shipmentDetails: { type: mongoose.Schema.Types.Mixed, required: true }, // would house weight, length, width, height
    deliveryOptions: { type: mongoose.Schema.Types.Mixed, required: true }, // would house date of delivery, pickup time
    paymentType: { type: String, required: true },
    paymentDetails: { type: mongoose.Schema.Types.Mixed, required: true }, // would house payer, payee, etc.
    amount: { type: Number, required: true },
    status: { type: String, required: true },
    verificationCode: { type: String },
    orderDate: { type: Date, required: true },
    orderTime: { type: String, required: true },
    category: { type: String, required: true }
  });
  
  const Order = mongoose.model('Order', orderSchema);
  module.exports = Order;
  
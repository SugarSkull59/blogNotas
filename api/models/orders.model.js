const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  clients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clients',
    required: true
  }],
  totalPrice: Number,
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: true
  }],
  is_sent: { Boolean, default: false },
  createdAt: {
    type: Number,
    default: Date.now()
  }
})

const ordersModel = mongoose.model('orders', orderSchema)
module.exports = ordersModel

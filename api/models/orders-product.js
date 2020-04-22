const mongoose = require('mongoose')

const orderProductSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  },
  quantity: Number
})

const ordersProductModel = mongoose.model('ordersProduct', orderProductSchema)
module.exports = ordersProductModel

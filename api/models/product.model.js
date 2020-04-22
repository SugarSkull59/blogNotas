const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true
  }],
  photo_url: String,
  createdAt: {
    type: Number,
    default: Date.now()
  },
  stock: {
    type: Number,
    required: true
  }
})

const productModel = mongoose.model('products', productSchema)
module.exports = productModel

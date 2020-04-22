const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
  shop_name: String,
  business_name: {
    type: String,
    required: true
  },
  business_manager: {
    type: String,
    required: true
  },
  VATIN: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    }
  },
  payment_method: {
    type: String,
    enum: ['credit', 'cash'],
    default: 'cash'
  },
  opening_hours: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  orders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'orders'
  },
  client_number: {
    type: Number,
    required: true,
  }
})

const clientModel = mongoose.model('clients', clientSchema)
module.exports = clientModel

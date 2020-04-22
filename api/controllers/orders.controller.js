const Order = require('../models/orders.model.js')
const { handleError } = require('../utils')

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
}

function getAllOrders (req, res) {
  Order
    .find()
    .populate('products')
    .populate('clients')
    .then((orders) => res.json(orders))
    .catch((err) => handleError(err, res))
}

function getOrderById (req, res) {
  Order
    .findById(req.params.orderId)
    .populate('products')
    .populate('clients')
    .then((order) => res.json(order))
    .catch((err) => handleError(err, res))
}

function createOrder (req, res) {
  Order
    .create(req.body)
    .then(order => res.json(order))
    .catch((err) => handleError(err, res))
}

function updateOrder (req, res) {
  Order
    .findByIdAndUpdate(req.params.orderId, req.body, { new: true })
    .then(updatedOrder => res.json(updatedOrder))
    .catch((err) => handleError(err, res))
}

function deleteOrder (req, res) {
  Order
    .findByIdAndDelete(req.params.orderId)
    .then((orderDeleted) => res.json(orderDeleted))
    .catch((err) => handleError(err, res))
}

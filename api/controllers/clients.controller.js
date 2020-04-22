const Client = require('../models/client.model.js')
const { handleError } = require('../utils')

module.exports = {
  getAllClients,
  getOneClient,
  createClient,
  deleteClient,
  updateClient,
  getOneOrderByClient,
  getAllOrdersByClient,
  deleteOneOrderByClient
}

function getAllClients (req, res) {
  Client
    .find()
    .then((clients) => res.json(clients))
    .catch((err) => handleError(err, res))
}

function getOneClient (req, res) {
  Client
    .findById(req.params.clientId)
    .then((client) => res.json(client))
    .catch((err) => handleError(err, res))
}

function createClient (req, res) {
  Client.create(req.body)
    .then((clients) => res.json(clients))
    .catch((err) => handleError(err, res))
}

function deleteClient (req, res) {
  Client
    .deleteOne({ _id: req.params.clientId })
    .then(client => res.json(client))
    .catch((err) => handleError(err, res))
}

function updateClient (req, res) {
  Client
    .findByIdAndUpdate(req.params.clientId, req.body, { new: true })
    .then(client => res.json(client))
    .catch((err) => handleError(err, res))
}

function getAllOrdersByClient (req, res) {
  Client
    .findById(req.params.clientId)
    .populate('orders')
    .then((client) => res.json({ orders: client.orders }))
    .catch((err) => handleError(err, res))
}

function getOneOrderByClient (req, res) {
  Client
    .findById(req.params.clientId)
    .then(client => res.json(client.orders))
    .then(orders => res.json(req.params.orderId))
    .catch((err) => handleError(err, res))
}
function deleteOneOrderByClient (req, res) {

}

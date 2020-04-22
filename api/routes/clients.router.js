const router = require('express').Router()

const {
  createClient,
  getAllClients,
  getOneClient,
  deleteClient,
  updateClient,
  getOneOrderByClient,
  getAllOrdersByClient
} = require('../controllers/clients.controller')

router.post('/', createClient)
router.get('/', getAllClients)
router.get('/:clientId', getOneClient)
router.delete('/:clientId', deleteClient)
router.put('/:clientId', updateClient)
router.get('/:clientId/orders/orderId', getOneOrderByClient)
router.get('/:clientId/orders', getAllOrdersByClient)

module.exports = router

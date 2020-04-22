const router = require('express').Router()

const {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
} = require('../controllers/orders.controller')

router.get('/', getAllOrders)
router.get('/:orderId', getOrderById)
router.post('/', createOrder)
router.put('/:orderId', updateOrder)
router.delete('/:orderId', deleteOrder)

module.exports = router

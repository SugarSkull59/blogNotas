const router = require('express').Router()

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/products.controller')

router.get('/', getAllProducts)
router.get('/:productId', getOneProduct)
router.post('/', createProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

module.exports = router

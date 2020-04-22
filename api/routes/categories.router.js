const router = require('express').Router()

const {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory
} = require('../controllers/categories.controller')

router.post('/', createCategory)
router.get('/', getAllCategories)
router.put('/:categoryId', updateCategory)
router.delete('/:categoryId', deleteCategory)

module.exports = router

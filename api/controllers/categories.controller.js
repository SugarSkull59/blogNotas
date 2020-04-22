const Category = require('../models/categories.model.js')
const { handleError } = require('../utils')

module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory
}

function createCategory (req, res) {
  Category.create(req.body)
    .then((clients) => res.json(clients))
    .catch((err) => handleError(err, res))
}

function getAllCategories (req,res ) {
  Category
    .find()
    .then(categories => res.json(categories))
    .catch((err) => handleError(err, res))
}

function updateCategory (req, res) {
  Category
    .findByIdAndUpdate(req.params.categoryId, req.body, { new: true })
    .then(updatedCategory => res.json(updatedCategory))
    .catch((err) => handleError(err, res))
}

function deleteCategory (req, res) {
  Category
    .deleteOne({ _id: req.params.categoryId })
    .then(deleted => res.json(deleted))
    .catch((err) => handleError(err, res))
}

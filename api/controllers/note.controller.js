const Note = require('../models/notes.model')
const {
  handleError
} = require('../utils')

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
}

function getAllNotes(req, res) {
  const query = { owner: res.locals.user._id }

  if (req.query.category) {
    query.category = { $regex: `${req.query.category}`, $options: 'i' }
  }
  if (req.query.date) {
    query.date = { $eq: `${req.query.date}` }
  }
  console.log('DENTRO DEL API');
  Note
    .find(query)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getNote(req, res) {
  Note
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createNote(req, res) {
  const note = {
    owner: res.locals.user,
    ...req.body
  }
  Note
    .create(note)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateNote(req, res) {
  Note
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteNote(req, res) {
  Note
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

const router = require('express').Router()

const {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/note.controller')

router.get('/', getAllNotes)
router.get('/:id', getNote)
router.post('/', createNote)
router.delete('/:id', deleteNote)
router.put('/:id', updateNote)

module.exports = router

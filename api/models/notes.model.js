const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
  owner: String,
  /* idUser */
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['work', 'personal', 'family', 'general'],
    required: true,
    default: 'general'
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }

})

const notesModel = mongoose.model('notes', notesSchema)
module.exports = notesModel

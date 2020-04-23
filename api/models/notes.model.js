const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: false
  },
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
  date: {
    type: String,
    required: false
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
})

const notesModel = mongoose.model('notes', notesSchema)
module.exports = notesModel

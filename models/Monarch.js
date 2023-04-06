const mongoose = require('mongoose')
const monarchSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  house: {
    type: String,
    require: true
  },

  start: {
    type: Number,
    require: true
  },

  end: {
    type: Number,
    require: true
  },

  endReason: {
    type: String,
    require: true
  },

  Kingdom: {
    type: String,
    require: true
  }

})

const Monarch = Mongoose.model('Monarch', monarchSchema)

module.exports = Monarch
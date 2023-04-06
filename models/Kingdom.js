const mongoose = require('mongoose')
const kingdomSchema = new mongoose.Schem({
  title: {
    type: String,
    require: true
  },
  extract: {
    type: String,
    require: true
  }


})

const Kingdom = Mongoose.model('Kingdom', kingdomSchema)

module.exports = Monarch
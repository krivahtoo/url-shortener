const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema(
  {
    short: {
      type: String,
      required: true,
      unique: true
    },
    full: {
      type: String,
      required: [true, 'Full url is required']
    }
  },
  {
    timestamps: true
  }
)

const Url = mongoose.model('Url', urlSchema)

module.exports = Url

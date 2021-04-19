if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose')
const { DB_URL } = process.env

const debug = require('debug')('app:main')

// Create express instance
const app = express()

// Require API routes
const url = require('./routes/url')

// Load middlewares
app.use(express.json())
app.use(express.urlencoded({ limit: '30mb', extended: true }))

// Import API Routes
app.use(url)
app.get('/', (req, res) => {
  res.send('Ok')
})

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => debug('Database connection successfull'))
  .catch(err => debug(err))

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    debug(`API server listening on port ${port}`)
  })
}

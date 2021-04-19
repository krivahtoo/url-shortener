const { Router } = require('express')
const debug = require('debug')('app:route:url')
const Url = require('../models/Url')
const { generateId } = require('../utils')

const router = Router()

router.post('/url', async (req, res, next) => {
  const { url } = req.body

  const short = generateId()

  try {
    const result = await Url.create({
      short,
      full: url
    })

    return res.send({
      ok: true,
      result
    })
  } catch (err) {
    debug(err)
    return res.status(500).send({
      ok: false,
      error: 'Internal Server error'
    })
  }
})

router.get('/url/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const url = await Url.findOne({
      short: id
    })

    if (!url) {
      return res.status(404).send({
        ok: false,
        error: 'Url not found'
      })
    }

    return res.send({
      ok: true,
      url: url.full
    })
  } catch (err) {
    debug(err)
    return res.status(500).send({
      ok: false,
      error: 'Internal Server error'
    })
  }
})

module.exports = router

'use strict'

const express = require('express')
const app = express()
const logger = require('morgan')
const path = require('path')

const PORT = 3001

//app.use(express.static(path.join(__dirname, '/client/public')))
app.use(logger("dev"));

app.get('/', (req, res) => {
  res.json({
    message: 'welcome!'
  })
})

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
})
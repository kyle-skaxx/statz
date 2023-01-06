const express = require('express')
const path = require('path')
const salesInteractionsRoutes = require('./routes/sales-interactions')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/sales-interactions', salesInteractionsRoutes)
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server

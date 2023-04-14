const express = require('express')
const fetch = require('node-fetch')
const adapter = require('./utils/adapter')
const app = express()
const port = 3000

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.get('/api/items', (req, res) => {
  const { q } = req.query
  let url = 'https://api.mercadolibre.com/sites/MLA/search'
  if (q) url += `?q=${q}`
  fetch(url).then((response) => response.json()).then((data) => res.send(adapter.list(data))).catch((e) => res.send(e))
})

app.get('/api/items/:id', (req, res) => {
  const { id } = req.params
  const url1 = `https://api.mercadolibre.com/items/${id}`
  const url2 = `https://api.mercadolibre.com/items/${id}/description`
  const promise1 = fetch(url1).then((response) => response.json())
  const promise2 = fetch(url2).then((response) => response.json())

  Promise.all([promise1, promise2]).then(data => res.send(adapter.show(data)))
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

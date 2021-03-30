const express = require('express');
const app = express();
const port = 3000;
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')
const path = require('path')

app.use(cors())

// REVIEWS SERVICE

// app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }))
app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://3.143.168.52:3001', changeOrigin: true }))

// MORE PLACES SERVICE

// app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }))
app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://18.223.160.190:3002', changeOrigin: true }))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})
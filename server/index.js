const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios')
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')
const path = require('path')

app.use(cors())

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

// DANE
app.use('/api/headerService/:propertyId', createProxyMiddleware({ target: 'http://ec2-54-221-114-185.compute-1.amazonaws.com:5001', changeOrigin: true }))

app.use('/api/hostedByService/:propertyId', createProxyMiddleware({ target: 'http://ec2-54-166-79-249.compute-1.amazonaws.com:5002', changeOrigin: true }))

// PAULY
// app.use('/propertyDetails/:pId', createProxyMiddleware({ target: 'http://localhost:5545', changeOrigin: true }))
app.use('/propertyDetails/:pId', createProxyMiddleware({ target: 'http://54.176.104.176:5545', changeOrigin: true }))

// JENNY
// app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://localhost:1984', changeOrigin: true }))
app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://3.22.194.10:1984', changeOrigin: true }))

// app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://localhost:1985', changeOrigin: true }))
app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://18.222.249.216:1985', changeOrigin: true }))

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})
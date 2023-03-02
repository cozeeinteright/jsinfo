const express = require('express')
const app = express()

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
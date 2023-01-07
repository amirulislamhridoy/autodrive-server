const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose');
require("dotenv").config();
require('./config/db')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
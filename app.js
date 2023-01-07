const express = require('express')
const app = express()
const mongoose = require('mongoose');
require("dotenv").config();
require('./config/db')

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});

module.exports = app
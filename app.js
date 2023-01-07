const express = require('express')
const app = express()
const mongoose = require('mongoose');
// const Car = require('./models/car.model');
require("dotenv").config();
require('./config/db')
var cors = require('cors')
var bodyParser = require('body-parser')
const CarRotuer = require('./api/car.router');
const LocationRouter = require('./api/location.router')

app.use(cors())
// app.use(express.json())
app.use(bodyParser.json())

app.use('/car', CarRotuer)
app.use('/location', LocationRouter)

// app.get('/addCar', (req, res) => {
//     try {
//         const data = new Car({ name: 'aa', email: 'a' })
//         data.save()
//         res.send(data)
//         console.log(data)
//     }catch(e){
//         res.send(e)
//         console.log(e)
//     }
// })

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});

module.exports = app
const express = require('express')
const app = express()
const mongoose = require('mongoose');
// const Car = require('./models/car.model');
require("dotenv").config();
require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser')
const CarRotuer = require('./api/car.router');
const LocationRouter = require('./api/location.router');
const ServiceRouter = require('./api/service.router');
const jwt = require('jsonwebtoken');

app.use(cors())
// app.use(express.json())
app.use(bodyParser.json())

app.use('/', ServiceRouter)
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
app.get('/login', (req, res) => {
    const email = req.query.email
    const token = jwt.sign({email}, process.env.SECRET_KEY_HEX_FORMAT)
    res.status(200).send({token})
})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});

module.exports = app
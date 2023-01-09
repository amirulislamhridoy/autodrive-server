const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    name: String,
    _id: String,
    description: String,
    img: String
})

const serviceModel = mongoose.model('service', serviceSchema)

module.exports = serviceModel
const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
    _id: String,
    name: String,
    address: String,
    call: String,
    email: String,
    website: String
})
const locationModel = mongoose.model('location', locationSchema)

module.exports = locationModel
const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
    _id: String,
    name: String,
    address: String,
    call: String,
    email: String,
    website: String
})
const location = mongoose.model('location', locationSchema)

module.exports = location
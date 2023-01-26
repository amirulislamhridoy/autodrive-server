const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: String,
    role: String
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
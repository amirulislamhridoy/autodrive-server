const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    carName: {
        type: String,
        required: true
    },
    fromDate:{
        type: String,
        required: true
    },
    toDate: String || null || undefined,
    number: {
        type: String || Number, 
        required: true
    },
    perDay:{
        type: String || Number,
        required: true
    }
})

const bookingModel = mongoose.model('booking', bookingSchema)

module.exports =  bookingModel
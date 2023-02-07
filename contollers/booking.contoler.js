const bookingModel = require('../models/booking.model')

const addBooking = async (req, res) => {
    try{
        const data = req.body
        console.lolg(data)
        const create = new bookingModel(data)
        create.save()
        res.status(200).json("Your booking is successfull")
    } catch(e){
        
    }
}

const getAllBooking = async (req, res) => {
    try{
        const bookings = await bookingModel.find()
        res.status(200).send({data: bookings})
    } catch(e){
        
    }
}

module.exports = {addBooking, getAllBooking}
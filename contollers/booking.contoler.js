const bookingModel = require('../models/booking.model')

const addBooking = async (req, res) => {
    try{
        const data = req.body
        const create = new bookingModel(data)
        create.save()
        res.status(200).json("Your booking is successfull")
    } catch(e){
        
    }
}

module.exports = {addBooking}
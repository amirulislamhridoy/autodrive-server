const bookingModel = require('../models/booking.model')

// const addBooking = async (req, res) => {
//     try{
//         // const data = req.body
//         // console.lolg(data)
//         const data = {email: 'email', location: 'location', carName:'car name', fromDate: 'from Date', toDate: 'to Date', number: 'number'}
//         console.log(data)
//         // const create = new bookingModel(data)
//         // create.save()
//         // res.status(200).json("Your booking is successfull")
//     } catch(e){
//         console.log(e)
//     }
// }

const getAllBooking = async (req, res) => {
    try{
        const bookings = await bookingModel.find()
        res.status(200).send({data: bookings})
    } catch(e){
        
    }
}
const addBooking = async (req, res) => {
    try{
        const data = req.body
        console.log(data)
        const doc = await bookingModel.create(data);
        res.status(200).json('Your booking is successfull')
    }catch(e){

    }
}
module.exports = {getAllBooking, addBooking}
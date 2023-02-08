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
const myCarBooking = async (req, res) => {
    try{
        const email = req.query.email
        const bookings = await bookingModel.find({email})
        res.status(200).send({data: bookings})
    } catch(e){
        res.status(204).json('Sorry, you have no booking car.')
    }
}
const addBooking = async (req, res) => {
    try{
        const data = req.body
        const doc = await bookingModel.create(data);
        res.status(200).json('Your booking is successfull')
    }catch(e){
        console.log(e.message)
    }
}
module.exports = {getAllBooking, myCarBooking, addBooking}
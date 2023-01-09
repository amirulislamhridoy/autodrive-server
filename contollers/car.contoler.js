const CarModel = require('../models/car.model')
const { v4 : uuidv4 } = require('uuid')

const addCar =  async (req, res) => {
    try {
        // const data = new Car({}, (err, data) => {
        //     if(err){
        //         res.send(err)
        //         console.log(err)
        //     }
        //     if(data){
        //         res.send(data)
        //         console.log(data)
        //     }
        // })
        // const data = new Car({_id: uuidv4(), img: 'aa', fuel: 'aaa'})
        await data.save()
        res.send(data)
        console.log(data)
    }catch(e){
        res.send(e)
        console.log(e)
    }
}
const getAllCar = async (req, res) => {
    try{
        const cars = await CarModel.find({})
        res.status(200).json(cars)
    }catch(e){
        res.status(500).send(error.message)
    }
}

module.exports = {addCar, getAllCar}
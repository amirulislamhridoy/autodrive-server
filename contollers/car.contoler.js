const CarModel = require('../models/car.model')
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken');

const addCar = async (req, res) => {
    try {
        // const data = new CarModel({}, (err, data) => {
        //     if(err){
        //         res.send(err)
        //         console.log(err)
        //     }
        //     if(data){
        //         res.send(data)
        //         console.log(data)
        //     }
        // })
        // const data = new CarModel({_id: uuidv4(), img: 'aa', fuel: 'aaa'})
        // const data = new CarModel({ img: 'aa', fuel: 'aaa'})
        await data.save()
        res.send(data)
        console.log(data)
    } catch (e) {
        res.send(e)
        console.log(e)
    }
}
const getAllCar = async (req, res) => {
    try {
        const cars = await CarModel.find({})
        res.status(200).json(cars)
    } catch (e) {
        res.status(500).send(error.message)
    }
}
const getCar = async (req, res) => {
    try {
        const { id } = req.params
        const car = await CarModel.findById(id)
        res.json(car)
    } catch (e) {
        res.json(e.message)
    }
}

module.exports = { addCar, getAllCar, getCar }
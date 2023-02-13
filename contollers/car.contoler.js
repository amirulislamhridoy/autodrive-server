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
        const { name, limit, page } = req.query
        let cars;
        let totalCar;
        if (!name) {
            totalCar = await CarModel.find({})
            cars = await CarModel.find({}).skip(+limit * +page).limit(parseInt(limit))
        } else {
            totalCar = await CarModel.find({
                "$or": [
                    {name: {$regex: name}}
                ]
            })
            cars = await CarModel.find({
                "$or": [
                    {name: {$regex: name}}
                ]
            }).skip(+limit * +page).limit(parseInt(limit))
        }
        const pages = Math.ceil(totalCar.length / limit)
        res.status(200).send({cars, pages, limit})
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
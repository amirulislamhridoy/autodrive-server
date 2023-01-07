const mongoose = require('mongoose')

const carShema = mongoose.Schema({
    _id: String,
    name: String,
    img: String,
    description: String,
    seat: Number,
    airCondition: String,
    fuel: String,
    dayHire: Number,
    engine: {title: String, engineType: String, displacement: String, horsePower: String, torque: String},
    dimension: {title: String, overalLength: String, overallWidth: String, overallHeight: String, seatingCapacity: String, doors: String},
    steering: {title: String, powerAssisted: String, miniumTurningRadius: String},
    suspension: {title: String, frontSuspension: String, earSuspension: String, forntBrake: String, rearBrake: String},
    wheel:{
        title: String, wheelType: String, wheelBase: String, wheelSize: String, spareTypre: String
    },
    mileage: {
        title: String, seatbelts: Number, immobilizer: String,
        childLock: String,
        antiLockBrakingSystem: String
    }
})

const Car = mongoose.model('car', carShema)

module.exports = Car
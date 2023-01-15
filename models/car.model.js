const mongoose = require('mongoose')
const { stringify } = require('uuid')

const carShema = mongoose.Schema({
    // _id: String,
    name: String,
    img: String,
    description: String,
    seat: Number,
    fuel: String,
    gear: String,
    dayHire: Number,
    engine: {title: String, engineType: String, displacement: String, horsePower: String, torque: String},
    dimension: {title: String, overalLength: String, overallWidth: String, overallHeight: String, doors: String},
    steering: {title: String, powerAssisted: String, miniumTurningRadius: String},
    suspension: {title: String, frontSuspension: String, earSuspension: String, forntBrake: String, rearBrake: String},
    wheel:{
        title: String, wheelType: String, wheelBase: String, wheelSize: String, spareTypre: String
    },
    mileage: {
        title: String, mileage: String, mileageHybrid: String,
    },
    safety:{
        title: String, seatbelts: Number, immobilizer: String, childLock: String, antiLockBrakingSystem: String
    }
})

const CarModel = mongoose.model('car', carShema)

module.exports = CarModel
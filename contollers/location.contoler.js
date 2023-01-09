const locationModel = require('../models/location.model')

const getAllLocation = async (req, res) => {
    try{
        const locations = await locationModel.find()
        await res.status(200).json(locations)
    }catch(error){
        await res.status(500).json(error.message)
    }
}

module.exports = {getAllLocation}
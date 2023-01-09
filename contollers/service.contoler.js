const serviceModel = require('../models/service.model')

const getAllService = async (req, res) => {
    try{
        const service = await serviceModel.find()
        res.send(service)
    }catch(e){
        res.json(e.message)
    }
}

module.exports = {getAllService}
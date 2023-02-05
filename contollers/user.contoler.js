const userModel = require('../models/user.modle')

const userContoler = async (req, res) => {
    try {
        const email = req?.query?.email
        console.log(email)
        console.log('email')
        res.json('aaa')
        // const user = await userModel.findOne({ email })
        // await res.status(200).json(user)
    }catch(e){
        res.status(400).json(e.message)
    }
}

module.exports = { userContoler }
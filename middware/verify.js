const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    try {
        const { email } = req.query 
        const authHeader = req.headers.authorization
        const token = authHeader.split(' ')[1]
        if(!token){return res.status(401).json('Unauthorize user')}
        jwt.verify(token, process.env.SECRET_KEY_HEX_FORMAT, function (err, decoded) {
            if(err){
                return res.status(401).josn(err.message)
            }
            if(decoded.email !== email){
                return res.status(404).json('Email is invalid')
            }else{
                req.decoded = decoded
                next()
            }
        });
    } catch (e) {
        res.status(404).json(e.message)
    }
}

module.exports = {verifyJWT}
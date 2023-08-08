const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/UserModel');

const requireAuth = async  (req, res, next) => {
    const {authorization} = req.headers;
    // check if authorization header exists
    if(!authorization){
        return res.status(401).json({error: 'Authorization token required'});
    }
    const token = authorization.split(' ')[1];      // get token
    try {
        const {_id} =jwt.verify(token, process.env.SECRET); // check if token is valid for a user object
        req.user = await User.findOne({_id}).select('_id');
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Request is not authorized'});
    }
    
}

module.exports = requireAuth; 
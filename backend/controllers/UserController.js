const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// create token for user
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
}


// signup user
const signupUser = async function (req, res) {
    const {email, password} = req.body;
    try {
        const user = await User.signup(email, password);
        const token = createToken(user._id);
        res.status(200).json({email, token});   
        console.log({email, token}); 
     
    } catch (error) {
        res.status(400).json({error: error.message});
    }   
}


// login user
const loginUser = async function (req, res) {
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({email, token});
        console.log({email, token}); 

    } catch (error) {
        res.status(400).json({error: error.message});
    }   
}

module.exports = {signupUser, loginUser};
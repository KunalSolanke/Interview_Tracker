const User = require('../models/User')
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken') ;
const { Topic } = require("../models");

const signup = async (req,res)=>{
    const {username,email,password} = req.body
    console.log(req.body);
    try{
        const user = await new User({
            username:username,
            email:email,
            password:password
        })
        await user.save()
        console.log(user)
        let accessToken = await user.generateAuthToken();
        console.log("token",accessToken)
        res.status(200).send({token:accessToken})
    }
    catch(err){
        console.log(err)
        res.status(401)
        res.send('failed')
    }
}




const login = async (req, res) => {
    const { email, password } = req.body
    console.log('email,passowrd on server are...',email,password);
    try {
        const user = await User.findByCredentials(email,password) ;
        console.log(user)
        let accessToken = await user.generateAuthToken();
        res.setHeader('Cache-control', 'private')
        res.cookie("token",accessToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        res.status(200).send({token:accessToken,username:user.username,email:user.email})
    }
    catch (err) {
        console.log(err)
        res.status(400)
        res.send('failed')
    }
}




const signupform = (req,res)=>{
    res.render('register.ejs')
}

const loginform = (req, res) => {
    res.render('login.ejs')
}


const logout = async(req,res)=>{
    res.clearCookie("token")
    res.redirect("/")
}

module.exports = {
    signup,signupform,loginform,login,logout
}
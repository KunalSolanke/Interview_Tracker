const User = require('../models/User')
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken') ;

const signup = async (req,res)=>{
    const {username,email,password} = req.body
    try{
        const user = await new User({
            username:username,
            email:email,
            password:password
        })
        await user.save()
        console.log(user)
        let accessToken =await user.generateAuthToken() ;
        console.log("token",accessToken)
        res.setHeader('Cache-control','private')
        res.cookie("token",accessToken,{httOnly:true,maxAge : 24*60*60*1000})
        res.redirect("/")
    }
    catch(err){
        console.log(err)
        res.status(404)
        res.send('failed')
    }
}




const login = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await User.findByCredentials(email,password) ;
        let accessToken = await user.generateAuthToken();
        res.setHeader('Cache-control', 'private')
        res.cookie("token",accessToken, { httOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        res.redirect("/")
    }
    catch (err) {
        console.log(err)
        res.status(404)
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
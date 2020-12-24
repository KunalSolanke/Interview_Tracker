const jwt = require('jsonwebtoken') ;
const User = require('../models/User') ;
const fetch = require('isomorphic-unfetch')
exports.auth = (req,res,next)=>{
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, process.env.ACCESS_JWT)
    try{
        const user =await User.findById(data._id) ;
        req.user = user ; 
        next()  ;
    }catch(err){
        console.log("access token expired") ;
        let refresh_token = req.cookies[__refreshtoken] ;
        if(!refresh_token)res.redirect('/accounts/login') ;

        fetch('/accounts/token',{
            "method":"post",
            "credentials":true,
             "body" :{refresh_token},
             "same-origin":true,
             "headers":{
                 "Content-Type":"application/json"
             }
        }).then(res=>{
            let data = res.json() ;
            req.accessToken = data.token 
            next()
        })
    }


}
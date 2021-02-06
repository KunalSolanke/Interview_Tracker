const User = require('../models/User')
const fs = require('fs')
const path = require('path')

const getProfile = async (req,res)=>{
    const token = req.get("Authorization").split(" ")[1];
    console.log("token is ",token)
    try{
        const user = req.user ;
        console.log(user)
        res.status(200).send(user)
    }
    catch(err){
        res.status(401).send(err.message)
    }
}

const updateProfile = async (req,res)=>{
    const token = req.get("Authorization").split(" ")[1];
    console.log("token is ",token)
    try{
        const user = req.user
        await user.updateOne(req.body)
        if(req.file.filename){
            console.log(req.file.filename)
            user.image = {
                data:fs.readFileSync(path.join(__dirname, '../public/uploads/' + req.file.filename)),
                contentType:'http://localhost:3001/static/uploads/'+req.filepath
            }
            await user.save()
        }
        res.status(200).send(user)
    }
    catch(err){
        res.status(401).send(err.message)
    }
}





module.exports = {
    getProfile,
    updateProfile,
    // addQuestion,
    // addInterview,
    // getMyInterviews,
    // getInterviews,
    // getMyQuestions
}
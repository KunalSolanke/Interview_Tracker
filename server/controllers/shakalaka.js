const InterviewExp  = require('../models/Interview');
const User  = require('../models/User');
const Comment = require('../models/Comment')
const Question = require('../models/Question');
const { use } = require('../routes/base');
const { connection } = require('mongoose');

const host = 'https://interview-tracker-iitg.herokuapp.com'
const local = 'http://localhost:3000'
const jaadu1 = async (req,res)=>{
    const interviews = await InterviewExp.find({})
    console.log('entered')
    //console.log(interviews)
    await Promise.all(
        interviews.map(async i=>{
            if(i.image.contentType.includes(host)){
                i.image.contentType = i.image.contentType.replace(host,local)
                console.log(i.image.contentType)
                await i.save()
            }
        })
    )
    res.send('Boom Boom')
}


const jaadu2 = async (req,res)=>{
    const questionlist = await Question.find({})
    const user = req.user
    try{
            user.questions = questionlist
            await user.save()
            res.send('Hurray')
    }
    catch(err){
        console.log(err)
        res.send('oops')
    }
}

module.exports = {
    jaadu1,
    jaadu2
}
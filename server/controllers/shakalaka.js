const InterviewExp  = require('../models/Interview');
const User  = require('../models/User');

const host = 'https://interview-tracker-iitg.herokuapp.com'

const jaadu1 = async (req,res)=>{
    const interviews = await InterviewExp.find({})
    //console.log(interviews)
    await Promise.all(
        interviews.map(async i=>{
            if(i.image.contentType.includes('3001')){
                i.image.contentType = host + i.image.contentType.replace('http://localhost:3001',host)
                await i.save()
            }
        })
    )
    res.send('Boom Boom')
}


const jaadu2 = async (req,res)=>{
    const interviews = await User.find({})
    await Promise.all(
        interviews.map(async i=>{
            if(i.image&&i.image.contentType&&i.image.contentType.includes('localhost')){
                i.image.contentType = host + i.image.contentType.replace('http://localhost:3001',host)
                await i.save()
            }
        })
    )
    res.send('Boom Boom !')
}

module.exports = {
    jaadu1,
    jaadu2
}
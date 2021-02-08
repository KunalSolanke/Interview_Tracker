const InterviewExp  = require('../models/Interview');
const User  = require('../models/User');

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
    const interviews = await User.find({})
    await Promise.all(
        interviews.map(async i=>{
            if(i.image&&i.image.contentType&&i.image.contentType.includes(host)){
                i.image.contentType = i.image.contentType.replace(host,local)
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
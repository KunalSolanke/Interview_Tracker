const User = require('../models/User')


const getProfile = async (req,res)=>{
    const token = req.headers["Authorization"];
    try{
        const user = await User.findBytoken(token)
        res.status(200).send(user)
    }
    catch(err){
        res.status(401).send(err.message)
    }
}







module.exports = {
    getProfile,
    updateProfile,
    addQuestion,
    addInterview,
    getMyInterviews,
    getInterviews,
    getMyQuestions
}
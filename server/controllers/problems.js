const {Topic, Question}  =require('../models')
const mongoose = require('mongoose') ;



const getTopics = async(req,res)=>{
    try{
    const topics = await Topic.find({}) ;
    res.status(200).send({topic_list:topics})
    }catch(err){
        res.status(400).send(err.message)
    }
}

const getTopicQuestions = async (req,res)=>{
    const {topicName} = req.params ;
    console.log(topicName)
    try{
      const topic = await Topic.findOne({title:topicName}) ;
	    const questions = await Question.find({topics:mongoose.Types.ObjectId(topic._id)});
      res.status(200).send({question_list:questions})
    }catch(err){
          res.status(400).send({error:err.message});
    }
}

module.exports ={
    getTopics,getTopicQuestions
}

const { Topic, Question } = require("../models");
const mongoose = require("mongoose");

const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find({});
    res.status(200).send({ topic_list: topics });
  } catch (err) {
    res.status(400).send(err.message);
  }
};



const getTopicQuestions = async (req, res) => {
  const { topicName } = req.params;
  console.log(topicName);
  try {
    const topic = await Topic.findOne({ title: topicName });
    const questions = await Question.find({
      topics: mongoose.Types.ObjectId(topic._id),
    });
    res.status(200).send({ question_list: questions });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};



/* And filtering */
const AndgetProblems = async (req,res)=>{
    let topics = req.query.topics
    if(topics){
        topics = topics.split(",")
        console.log(topics)
        topics = await Promise.all(topics.map(async (topic)=>{
        console.log('entered')
        console.log('topic is ',topic)
        const completeTopic = await Topic.findOne({title:topic})
        return mongoose.Types.ObjectId(completeTopic._id)
    }))
    console.log(topics)
    const questions = await Question.find().where('topics').in(topics).exec()
    res.status(200).send({data:questions})
    return;
    }
    const problems = await Question.find({})
    res.status(200).send({data:problems})
}
/* And filtering */

/* Or filtering*/
const OrgetProblems = async (req,res)=>{
  const {level,topics,solved} = req.query 
  console.log(level);
  let topiclist = []
  try{
    if(topics){
      topiclist = topics.split(",");
    }
    console.log(topiclist)
    let topiclistRef = []
    topiclistRef = await Topic.find({
      title:{"$in":topiclist},
    })
    const questionlist = await Question.find({
      topics:{"$in":topiclistRef},
    })
    console.log(questionlist)
    res.status(201).send(questionlist)
  }
  catch(err){
    console.log(err.message);
    res.status(401).send("can't get problems")
  }
}
/* Or filtering*/


const getProbelmsFromTopics = async (req,res)=>{
    const topic = req.query.topics
    console.log(topic)
    res.send('Hi there')
}

module.exports ={
    getTopics,
    getTopicQuestions,
    getProbelmsFromTopics,
    AndgetProblems,
    OrgetProblems
}

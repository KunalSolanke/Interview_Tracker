const User = require("../models/User");
const fs = require("fs");
const path = require("path");
const InterviewExp = require("../models/Interview");
const Question = require("../models/Question");
const getUrl = require("../middlewares/s3upload");

const getProfile = async (req, res) => {
  const token = req.get("Authorization").split(" ")[1];
  console.log("token is ", token);
  try {
    const user = req.user;
    console.log(user);
    res.status(200).send(user);
  } catch (err) {
    console.log(err.message)
    res.status(401).send(err.message);
  }
};

const getMyInterviews = async (req, res) => {
  try {
    console.log(req.user);
    const interviews = await InterviewExp.find({
      user: req.user._id,
    });
    res.status(200).send(interviews);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const getMyQuestions = async (req, res) => {
  try {
    console.log(1100101);
    let user = req.user;
    //user = (await User.findById(user._id)).populate('questions').exec()
    await user.populate("questions").execPopulate();
    // questions =  await Promise.all(
    //     questions.map(async (question)=>{
    //        return await question.populate('topics').execPopulate()
    //     })
    // )
    await user
      .populate({ path: "questions.topics", select: "title" })
      .execPopulate();
    let questions = user.questions;
    console.log(questions);
    res.status(200).send(questions);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const updateProfile = async (req, res) => {
  const token = req.get("Authorization").split(" ")[1];
  console.log("token is ", token);
  try {
    let user = req.user;
    await User.findByIdAndUpdate(user._id, req.body);

    if (req.file) {
      user.image = {
        contentType: req.file.url,
      };
      await user.save();
    }
    user = await User.findById(user._id);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(401).send(err.message);
  }
};

const getStarredQuestions = async (req,res)=>{
  const user = req.user
  const starredQuestions = user.starredQuestions
  res.status(201).send(starredQuestions)
}

const addToStarred = async (req,res)=>{
  const user = req.user;
  console.log(user,req.body);
  const {link,check} = req.body
  const question = await (await Question.findOne({url:link}))
  console.log('is id ',question._id)
  try{
    const starredquestions = user.starredQuestions
    console.log('stq ',starredquestions)
    if(check){
      res.status(201).send(user.starredQuestions)
    }
    else if(starredquestions&&starredquestions.includes(question._id)){
      // it means already starred so make it unstarred
      console.log('ques exists alraedy')
      let newlist = []
      for(let ques of starredquestions){
        console.log(ques,question._id)
        if(!(ques.toString()==question._id.toString())){
          console.log('enterd because ',ques,question._id)
          console.log(question)
          newlist.push(ques);
        }
      }
      console.log('newlist is ',newlist)
      user.starredQuestions = newlist;
      await user.save();
      res.status(200).send(user.starredQuestions)
    }
    else{
      user.starredQuestions = [question._id,...user.starredQuestions];
      await user.save();
      console.log(user.starredQuestions)
      res.status(200).send(user.starredQuestions)
    }
  }
  catch(err){
    console.log(err)
    res.status(400).send(err)
  }
}

module.exports = {
  getProfile,
  updateProfile,
  getMyInterviews,
  getMyQuestions,
  addToStarred,
  getStarredQuestions
};

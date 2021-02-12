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
  try {
    console.log(1100101);
    let user = req.user;
    //user = (await User.findById(user._id)).populate('questions').exec()
    await user.populate("starredQuestions").execPopulate();
    await user
      .populate({ path: "starredQuestions.topics", select: "title" })
      .execPopulate();
    let starredquestions = user.starredQuestions;
    console.log(starredquestions);
    res.status(200).send(starredquestions);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

const addToStarred = async (req,res)=>{
  const user = req.user;
  const {link,check} = req.body
  const question = (await Question.findOne({url:link}))
  try{
    let starredquestionsIds = user.starredQuestions
    await user.populate("starredQuestions").execPopulate();
    await user
      .populate({ path: "starredQuestions.topics", select: "title" })
      .execPopulate();
    let starredquestions = user.starredQuestions;
    if(check){
      res.status(201).send(user.starredQuestions)
    }
    else if(starredquestionsIds&&starredquestionsIds.includes(question._id)){
      // it means already starred so make it unstarred
      let newlist = []
      for(let ques of starredquestions){
        console.log(ques._id,question._id)
        if(!(ques._id.toString()==question._id.toString())){
          newlist.push(ques);
        }
      }
      let newIds = newlist.map(ques=>ques._id);
      user.starredQuestions = newIds;
      await user.save();
      res.status(200).send(newlist)
    }
    else{
      let newlist = [question,...user.starredQuestions];
      user.starredQuestions = [question._id,...starredquestionsIds];
      await user.save();
      res.status(200).send(newlist)
    }
  }
  catch(err){
    console.log(err)
    res.status(400).send(err)
  }
}

const getStarredInterviews = async (req,res)=>{
  try {
    console.log(1100101);
    let user = req.user;
    console.log(user,'before')
    //user = (await User.findById(user._id)).populate('questions').exec()
    await user.populate("starredInterviews").execPopulate();
    console.log('middle',user)
    // await user
    //   .populate({path:"starredInterviews",select:"user"})
    //   .execPopulate();
    let starredinterviews = user.starredInterviews;
    console.log(starredinterviews);
    res.status(200).send(starredinterviews);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

const addToStarredInterviews = async (req,res)=>{
  const user = req.user;
  const {pk,check} = req.body
  const interview = await InterviewExp.findById(pk)
  console.log('interview is ',interview);
  try{
    let starredinterviewsIds = user.starredInterviews
    console.log('starredinterviews currently-->',starredinterviewsIds)
    await user.populate("starredInterviews").execPopulate();
    // await user
    //   .populate({path:"starredInterviews",select:"user"})
    //   .execPopulate();
    let starredinterviews = user.starredInterviews;
    console.log('complete starred intervies-->',starredinterviews)
    if(check){
      res.status(201).send(user.starredinterviews)
    }
    else if(starredinterviewsIds&&starredinterviewsIds.includes(pk)){
      // it means already starred so make it unstarred
      console.log('entered because pk is ',pk);
      let newlist = []
      newlist = starredinterviews.filter(i=>i._id!=pk);
      console.log('so newlist becomes',newlist)
      let newIds = newlist.map(ques=>ques._id);
      user.starredInterviews = newIds;
      await user.save();
      res.status(200).send(newlist)
    }
    else{
      let newlist = [interview,...user.starredInterviews];
      console.log('newlist after addition is ',newlist)
      user.starredInterviews = [interview._id,...starredinterviewsIds];
      await user.save();
      res.status(200).send(newlist)
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
  getStarredQuestions,
  getStarredInterviews,
  addToStarredInterviews,
};

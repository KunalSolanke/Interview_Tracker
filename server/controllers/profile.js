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
    console.log(req.body);
    await User.findByIdAndUpdate(user._id, req.body);
    if (req.fileurl) {
      user.image = {
        contentType: req.fileurl,
      };
      await user.save();
    }
    user = await User.findById(user._id);
    console.log(user);
    res.status(200).send(user);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

module.exports = {
  getProfile,
  updateProfile,
  getMyInterviews,
  getMyQuestions,
};

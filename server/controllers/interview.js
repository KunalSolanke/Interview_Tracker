const InterviewExp  = require('../models/Interview');
const fs = require('fs');
const { isAbsolute } = require('path');
const path = require('path');
const Comment = require('../models/Comment');
const { Mongoose } = require('mongoose');
const getUrl = require("../middlewares/s3upload");
const createInterview = async (req, res) => {
  console.log(req.body);
  const { company, title, description, content } = req.body;
  try {
    console.log(req.user);
    const Interview = await new InterviewExp({
      user: req.user._id,
      company,
      title,
      description,
      content,
      image: {
        contentType: req.fileurl,
      },
      isApproved: true,
    });
    await Interview.save();
    console.log(Interview);
    res.status(200).send(Interview);
  } catch (err) {
    console.log(err);
    res.status(400).send("failed");
  }
};

const getForm = (req, res) => {
  res.render("interview.ejs");
};

const findInterviews = async (req, res) => {
  try {
    const list = await InterviewExp.find({});
    res.status(200).send(list);
  } catch (err) {
    res.status(400).send(err);
  }
};

const findInterviewByUser = async (req, res) => {
  try {
    const listByUsers = await InterviewExp.find({
      "user.username": req.body.username,
    });
    res.status(200).send({ list: listByUsers });
  } catch (err) {
    res.status(400).send(err);
  }
};

const findMyInterviews = async (req, res) => {
  const user = req.user;
  if (!user) {
    res.status(401).send("Log in to see your interviews");
  }
  try {
    const interviews = await InterviewExp.find({
      user: req.user._id,
    });
    console.log(interviews);
    res.status(201).send(interviews);
  } catch (err) {
    res.status(400).send(err);
  }
};

const findInterviewByCompany = async (req, res) => {
  try {
    const listByCompany = await InterviewExp.find({
      company: req.body.company,
    });
    res.status(200).send({ list: listByCompany });
  } catch (err) {
    res.status(400).send(err);
  }
};

const getInterviewById = async (req, res) => {
  const interviewId = req.params.pk;
  console.log("interview id is ", interviewId);
  try {
    const interview = await InterviewExp.findOne({ _id: interviewId })
      .populate("user")
      .exec();
    res.status(200).send(interview);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};

const UpdateInterview = async (req, res) => {
  try {
    const Update = await InterviewExp.findOneAndUpdate({}, req.body);
    res.status(200).send(Update);
  } catch (err) {
    res.status(400).send(err);
  }
};

const DeleteInterview = async (req, res) => {
    try {
        const Delete = await InterviewExp.findByIdAndDelete(req.user._id)
        res.status(200).send("")
    }
    catch(err) {
        res.status(400).send(err);
    }
}

const postComment = async (req,res) => {
    const data = req.body.desc
    console.log(data)
    const {pk} = req.params
    try{
        const comment = await Comment.create({
            user:req.user._id,
            interview :pk,
            description:data
        })
        console.log(comment)
        res.status(201).send(comment)
    }
    catch(err){
        res.status(400).send(err.message)
    }
}

const getComments = async (req,res)=>{
    const {pk} = req.params
    try{
        const comments = await Comment.find({
            interview:pk
        }).populate('user').exec()
        console.log(comments)
        res.status(200).send(comments)
    }
    catch(err){
        console.log(err)
        res.status(400).send(err.message)
    }
}


module.exports = {
    getForm, createInterview, findInterviews,
    findInterviewByUser, findInterviewByCompany, UpdateInterview,
    findMyInterviews,getInterviewById,postComment,
    getComments
};


const InterviewExp  = require('../models/Interview');
const fs = require('fs');
const { isAbsolute } = require('path');
const path = require('path');

const createInterview = async (req, res) => {
    console.log(req.body)
    const {company, title, description, content} = req.body;
    try{
        console.log(req.user);
        const Interview = await new InterviewExp({
            user: req.user._id,
            company,
            title,
            description,
            content,
            image: { 
                data: fs.readFileSync(path.join(__dirname, '../public/uploads/' + req.file.filename))
            },
            isApproved: true,
        })
        await Interview.save()
        console.log(Interview)
        res.status(200).send({Interview})
    }
    catch(err) {
        console.log(err);
        res.status(400).send('failed');
    }
}

const getForm = (req, res) => {
    res.render('interview.ejs');
}

const findInterviews = async (req, res) => {
    try {
        const list = await InterviewExp.find({});
        res.status(200).send({list})
    }
    catch(err) {
        res.status(400).send(err);
    }
        
}

const findInterviewByUser = async (req, res) => {
    try {
        const listByUsers = await InterviewExp.find({
            'user.username': req.body.username
        })
        res.status(200).send({list: listByUsers})
    }
    catch(err) {
        res.status(400).send(err);
    }
}

const findInterviewByCompany = async (req, res) => {
    try {
        const listByCompany = await InterviewExp.find({
            company: req.body.company
        })
        res.status(200).send({list: listByCompany})
    }
    catch(err) {
        res.status(400).send(err);
    }
}

const getInterviewById = async (req, res) => {
    
}

const UpdateInterview = async (req, res) => {
    try {
        const Update = await InterviewExp.findOneAndUpdate({
            
        }, req.body)
        res.status(200).send(Update)
    }
    catch(err) {
        res.status(400).send(err);
    }
}

const DeleteInterview = async (req, res) => {
    try {
        const Delete = await InterviewExp.findByIdAndDelete(req.user._id)
        res.status(200).send("")
    }
    catch(err) {
        res.status(400).send(err);
    }
}



module.exports = {
    getForm, createInterview, findInterviews,
    findInterviewByUser, findInterviewByCompany, UpdateInterview
};
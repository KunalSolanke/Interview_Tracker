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
        res.status(400).res.send('failed');
    }
}

const getForm = (req, res) => {
    res.render('interview.ejs');
}

module.exports = {
    getForm, createInterview
};
const Company = require('../models/Company')
const InterviewExp = require('../models/Interview')

const getCompanies = async (req,res)=>{
    try{
        const companies = await Company.find({})
        //console.log('companies ---> ',companies)
        res.status(201).send(companies)
    }
    catch(err){
        console.log(err.message);
        res.status(400).send(err)
    }
}

const getComapnyInterviews = async (req,res)=>{
    const comapnyname = req.params.name
    console.log(comapnyname)
    const company = await Company.findOne({name:comapnyname})
    const companyid = company._id
    console.log(companyid)
    try{
        const interviews = await InterviewExp.find({
            company:companyid
        })
        console.log(interviews)
        res.status(201).send(interviews)
    }
    catch(err){
        console.log(err.message)
        res.status(400).send(err)
    }
}

module.exports = {
    getCompanies,getComapnyInterviews
}
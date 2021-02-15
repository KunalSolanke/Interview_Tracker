const mongoose = require('mongoose')

const CompanySchema = mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    logo:{
        contentType:String
    },
    description:{
        type:String
    }
})

const Company = mongoose.model('Company',CompanySchema);
module.exports = Company


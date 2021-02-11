const mongoose = require('mongoose')
const bycrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    username: {
        type: String,
        minLength: 4
    },
    last_name: {
        type: String,
    },
    first_name: {
        type: String,
    },
    image: {
        contentType: String,
    },
    bio: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },

    role: {
        type:String,
        enum:['admin','member'],
        required:true,
        default:'member'
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    starredQuestions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question",
          },
    ],
    starredInterviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "InterviewExp",
          },
    ]
}, {
    timestamps: true
})




userSchema.pre('save',async function (next){
  const user = this ;
  if(user.isModified('password')){
      user.password = bycrpt.hash(user.password,8) ;
  }
  next()
})




userSchema.methods.generateAuthToken = async function(){
    const user = this ;
    const token = jwt.sign({ _id: user._id },process.env.JWT_REFRESH_KEY) ;
    return token ;
}







userSchema.statics.findByCredentials = async function(email,password){
    const user = await this.findOne({email}) ;
    if(!user){
        throw new Error({"error":{
            "message" :"No user with given email"
        }})
    }

    if(bycrpt.compare(password,user.password)){
        return user ;
    }
    throw new Error({
        "error":{
            "message" :"Invalid Credentials"
        }
    })
}



const User = mongoose.model('User', userSchema)

module.exports = User


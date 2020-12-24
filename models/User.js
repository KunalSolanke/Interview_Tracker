const mongoose = require('mongoose')
const bycrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
        unique :true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }

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


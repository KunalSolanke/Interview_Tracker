const mongoose = require('mongoose')



const userSchema = mongoose.Schema({

    username: {
        type: String,
        minLength: 4
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }

}, {
    timestamps: true
})



export const User = mongoose.model('User', userSchema)
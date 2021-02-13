const mongoose = require("mongoose");

const interviewExpSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, 

    image: {
        contentType: String,
    },

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Company"
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true,
    },

    isApproved: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true
});

const InterviewExp = mongoose.model('InterviewExp', interviewExpSchema);

module.exports = InterviewExp;
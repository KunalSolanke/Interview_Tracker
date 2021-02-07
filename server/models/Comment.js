const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    
    interview: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InterviewExp"
    },

    description: {
        type: String,
    }

}, {
    timestamps: true
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
    },
    title: String,
    website: String,
    topics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
      },
    ],
    description: String,
    submissions: {
      type: Number,
      default: 0,
    },
    success_rate: {
      type: Number,
      default: 0,
    },
    accepted_submssions: {
      type: Number,
      default: 0,
    },
    difficulty:{
        type:String,
        default:"Easy"
    },
    discussion_url: String,
  },
  {
    timestamps: true,
  }
);
questionSchema.path("url").validate((val) => {
  urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, "Invalid URL.");
questionSchema.path("discussion_url").validate((val) => {
  urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, "Invalid URL.");
const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

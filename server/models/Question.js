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
      min: [0, "Submissions can not be negative"],
    },
    accepted_submssions: {
      type: Number,
      default: 0,
      min: [0, "Submissions can not be negative"],
      validate: [
        function (val) {
          return this.submissions <= val;
        },
        "Accepted submissions can not exceed total submissions",
      ],
    },
    difficulty: {
      type: String,
      default: "Easy",
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

questionSchema.methods.SuccessRate = async function () {
  return (this.accepted_submssions / this.submissions) * 100;
};

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

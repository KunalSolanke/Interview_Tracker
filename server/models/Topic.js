const mongoose = require("mongoose");

const topicSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    questions: Number,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;

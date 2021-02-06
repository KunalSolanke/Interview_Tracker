var express = require("express");
var router = express.Router();
var controller= require("../controllers/problems");


router.route("/topics").get(controller.getTopics)
router.route("/topics/:topicName").get(controller.getTopicQuestions)
router.route("").get(controller.OrgetProblems)
router.route("/create").post(controller.addProblem)

module.exports = router;

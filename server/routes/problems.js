var express = require("express");
var router = express.Router();
var controller= require("../controllers/problems");


router.route("/topics").get(controller.getTopics)
router.route("/topics/:topicName").get(controller.getTopicQuestions)


module.exports = router;

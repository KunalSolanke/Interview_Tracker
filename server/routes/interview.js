var express = require("express");
var router = express.Router();
var controller= require("../controllers/interview");
const upload = require('../middlewares/image');
const isLogedIn = require('../middlewares/auth');

router.get("/list", controller.findInterviews);
router.get("/:pk",controller.getInterviewById)
router.use(isLogedIn);
router.route("/create").get(controller.getForm);
router.post("/create", upload.single('image'), controller.createInterview);
router.post("/listByUsers", controller.findInterviewByUser);
router.post("/Update", controller.UpdateInterview);
router.get("/mine",controller.findMyInterviews)
router.route("/comments/:pk").post(controller.postComment).get(controller.getComments)
module.exports = router;

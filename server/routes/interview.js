var express = require("express");
var router = express.Router();
var controller= require("../controllers/interview");
const upload = require('../middlewares/image');
const isLogedIn = require('../middlewares/auth');

router.use(isLogedIn);
router.route("/create").get(controller.getForm);
router.post("/create", upload.single('image'), controller.createInterview);

module.exports = router;

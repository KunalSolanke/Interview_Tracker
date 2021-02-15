var express = require("express");
var router = express.Router();
var controller= require("../controllers/company");
const upload = require('../middlewares/image');
const isLogedIn = require('../middlewares/auth');

router.get('/list',controller.getCompanies)
router.use(isLogedIn);
router.get('/interviews/:name',controller.getComapnyInterviews)
module.exports = router;

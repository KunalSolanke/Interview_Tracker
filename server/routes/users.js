var express = require("express");
var router = express.Router();
var auth = require("../controllers/auth");
let profile = require("../controllers/profile");
const upload = require("../middlewares/image");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/signup", auth.signupform);
router.post("/signup", auth.signup);
router.get("/login", auth.loginform);
router.post("/login", auth.login);
router.get("/refresh", auth.refresh);
router.use(isLoggedIn);
router.get("/logout", auth.logout);
router.get("/profile", profile.getProfile);
router.route("/profile/interviews").get(profile.getMyInterviews);
router.post("/profile", upload.single("image"), profile.updateProfile);
router.get("/profile/questions", profile.getMyQuestions);
router
  .route("/profile/starred")
  .post(profile.addToStarred)
  .get(profile.getStarredQuestions);
router
  .route("/profile/starredInterviews")
  .post(profile.addToStarredInterviews)
  .get(profile.getStarredInterviews);

module.exports = router;

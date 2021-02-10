var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth')
let profile = require('../controllers/profile')
const upload = require('../middlewares/image');
const isLoggedIn = require('../middlewares/auth')

router.get('/signup',auth.signupform)
router.post('/signup',auth.signup)
router.get('/login', auth.loginform)
router.post('/login', auth.login)
router.get('/logout',auth.logout)
router.use(isLoggedIn)
router.get('/profile',profile.getProfile)
router.route('/profile/interviews').get(profile.getMyInterviews)
router.post('/profile',upload.single('image'),profile.updateProfile)
router.get('/profile/questions',profile.getMyQuestions)
router.route('/profile/starred').post(profile.addToStarred).get(profile.getStarredQuestions)


module.exports = router;


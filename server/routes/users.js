var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth')
let profile = require('../controllers/profile')
const upload = require('../middlewares/image');

router.get('/signup',auth.signupform)
router.post('/signup',auth.signup)
router.get('/login', auth.loginform)
router.post('/login', auth.login)
router.get('/logout',auth.logout)
router.get('/profile',profile.getProfile)
router.post('/profile',upload.single('image'),profile.updateProfile)


module.exports = router;


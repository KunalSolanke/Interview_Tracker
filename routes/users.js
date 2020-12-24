var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth')


router.get('/signup',auth.signupform)
router.post('/signup',auth.signup)
router.get('/login', auth.loginform)
router.post('/login', auth.login)
router.get('/logout',auth.logout)

module.exports = router;

var express = require('express');
var router = express.Router();
const cont = require('../controllers/shakalaka')

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('test.ejs')
});

router.get('/1',cont.jaadu1)
router.get('/2',cont.jaadu2)


module.exports = router;

const express = require('express');
const router = express();
const auth = require('../middleware/auth')
const kycController = require('../controllers/kycController')

const bodyParser = require('body-parser')
router.use(bodyParser.json())

router.set('view engine', 'ejs')
router.set('views', './views/users')

router.get('/', auth.isLogin, kycController.loadKYC)

router.post('/form/1', kycController.form1)

router.get('/form/2', auth.isLogin, kycController.form2)

router.get('/form/3', auth.isLogin, kycController.form3)
router.post('/form/3', kycController.form3p)
module.exports = router;
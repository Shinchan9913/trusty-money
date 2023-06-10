const express = require('express')
const user_route = express()
const session = require('express-session')

user_route.use(session({
    secret: "sessionSecret",
    resave: false,
    saveUninitialized: true
}));

const auth = require("../middleware/auth")

user_route.set('view engine', 'ejs')
user_route.set('views', './views/users')

const bodyParser = require('body-parser')
user_route.use(bodyParser.json())
user_route.use(bodyParser.urlencoded({extended:true}))

const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, path.join(__dirname, '../public/userImages'))
    },
    filename:function(req, file, cb){
        const name = Date.now()+'-'+file.originalname
        cb(null, name)
    }
})

const upload = multer({storage:storage})

const userController = require('../controllers/userController')

user_route.get('/register', auth.isLogout, userController.loadRegister)

// user_route.post('/register', upload.single('image'), userController.addUser)

user_route.get('/verify', userController.verifyMail)

user_route.get('/', auth.isLogout, userController.landingLoad)
user_route.get('/login',auth.isLogout, userController.loginLoad)
user_route.post('/login', userController.verifyLogin)

//register
user_route.get('/signup', auth.isLogout, userController.showEmailForm)
user_route.post('/signup/email-form', userController.submitEmail)
user_route.get('/signup/verifyEmailOTP', auth.isLogout, userController.loadEmailOTP)
user_route.post('/signup/email-otp', upload.none(),userController.submitEmailOTP)
user_route.get('/signup/mobile-form', auth.isLogout, userController.showMobileForm)
user_route.post('/signup/mobile-form', userController.submitMobile)
user_route.get('/signup/verifyMobileOTP', auth.isLogout, userController.loadMobileOTP)
user_route.post('/signup/verifyMobileOTP', userController.submitMobileOTP)
user_route.get('/signup/password', auth.isLogout, userController.showPasswordForm)
user_route.post('/signup/password', userController.submitPasswordForm)
// user_route.post('/signup', userController)

user_route.get('/forgot-password', auth.isLogout, userController.loadForgotPass)


user_route.get('/dashboard', auth.isLogin, userController.loadHome)

user_route.get('/auth/KYC', (req, res) => {
    // Render the KYC form
    res.render('kyc', { verificationStatus: 'none' });
});

user_route.post('/auth/KYC/1', (req, res) => {
    // Process the form submission and perform KYC verification
    const { panNumber } = req.body;

    // Assuming the verification status is stored in a variable called `verificationStatus`
    verificationStatus = 'pending';

    // Perform KYC verification logic here
    if(panNumber === "ASDFG1234"){
        verificationStatus = 'approved'
    }else{
        verificationStatus = 'rejected'
    }


    // Render the KYC form with the updated verification status
    res.render('kyc', { verificationStatus });
});

user_route.get('/myAccount', userController.loadmyAccount)
user_route.get('/settings', auth.isLogin, userController.loadSettings)
user_route.get('/settings/change-password', auth.isLogin, userController.loadChangePassword)
user_route.post('/settings/change-password', userController.changePassword)

user_route.get('/logout', auth.isLogin, userController.userLogout)

// user_route.get('/auth/KYC', userController.loadKYC)
// user_route.post('/auth/KYC/1',auth.verifyKYC, userController.KYCauth1)
// user_route.post('/auth/KYC/2', userController.KYCauth2)
// user_route.post('/auth/KYC/3', userController.KYCauth3)


module.exports = user_route
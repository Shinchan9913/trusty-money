const express = require("express");
const router = express.Router();
const user_route = express();

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

const userController = require('../controllers/userController');

user_route.get('/', userController.verifyMail);

module.exports = user_route;
const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const config = require('../config/config')
const urlencode = require('urlencode')



const sendVerificationMail = async(name, email, user_id) => {
    try {
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 587,
            secure:false,
            requireTLS:true,
            auth:{
                user:config.smtp.mail,
                pass:config.smtp.pass
            }

        })
        const link = `http://127.0.0.1:3000/verify?id=${encodeURIComponent(user_id)}`
        const message = `Please click on the following link to verify your email address: ${link}`
        // const encodedLink = urlencode(link)
        const mailOptions = {
            from:config.smtp.mail,
            to:email,
            subject:"Trusty Money Verification Mail",
            html:message
        }
        console.log(mailOptions.html)

        transporter.sendMail(mailOptions, function(err, info){
            if(err){
                console.log(err)
            }
            else{
                console.log("Email sent successfully!", info.response)
            }
        })

    } catch (error) {
        console.log(error)
    }
}

const hashPass = async(password) => {
    try {
        securePass = await bcrypt.hash(password, 9)
        return securePass

    } catch (error) {
        console.log(error)
    }
}


const loadRegister = async(req, res)=>{
    try {
        res.render('registration')
    } catch (error) {
        console.log(error)
    }
}

const addUser = async(req, res)=>{
    try {
        const hashedPass = await hashPass(req.body.password)
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mno,
            image:req.file.filename,
            password:hashedPass,
            is_admin:0,
        })

        const userData = await user.save()

        if(userData){
            sendVerificationMail(req.body.name, req.body.email, userData._id)
            res.render('registration', {message: "Registration Successful!"})
        }
        else{
            res.render('registration', {message: "Registration Failed."})
        }
    } catch (error) {
        console.log(error)
    }
}

const verifyMail = async(req, res)=>{
    try {
        
        const verify = await User.updateOne({_id:req.query.id}, {$set:{is_verified:1}})
        console.log(verify)
        res.render("email-verified")

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    loadRegister,
    addUser,
    verifyMail
}
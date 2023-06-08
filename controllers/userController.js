const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const config = require("../config/config");
const urlencode = require("urlencode");
const kyc = require("../models/kycModel");

const sendVerificationMail = async (name, email) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: config.smtp.mail,
        pass: config.smtp.pass,
      },
    });
    // const link = `http://127.0.0.1:3000/verify?id=${encodeURIComponent(user_id)}`
    // const message = `Please click on the following link to verify your email address: ${link}`
    // const encodedLink = urlencode(link)
    const otp = generateOTP(6);
    req.session.otp = otp;

    const message = `Hey ${name}, your OTP is ${otp}`;
    const mailOptions = {
      from: config.smtp.mail,
      to: email,
      subject: "Trusty Money Verification Mail",
      html: message,
    };
    console.log(mailOptions.html);

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent successfully!", info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const hashPass = async (password) => {
  try {
    securePass = await bcrypt.hash(password, 9);
    return securePass;
  } catch (error) {
    console.log(error);
  }
};

const loadRegister = async (req, res) => {
  try {
    res.render("registration");
  } catch (error) {
    console.log(error);
  }
};

// const addUser = async(req, res)=>{
//     try {
//         const hashedPass = await hashPass(req.body.password)
//         const user = new User({
//             name:req.body.name,
//             email:req.body.email,
//             mobile:req.body.mno,
//             image:req.file.filename,
//             password:hashedPass,
//             is_admin:0,
//         })

//         const userData = await user.save()

//         if(userData){
//             sendVerificationMail(req.body.name, req.body.email, userData._id)
//             res.render('registration', {message: "Registration Successful!"})
//         }
//         else{
//             res.render('registration', {message: "Registration Failed."})
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

const verifyMail = async (req, res) => {
  try {
    const verify = await User.updateOne(
      { _id: req.query.id },
      { $set: { is_verified: 1 } }
    );
    console.log(verify);
    res.render("email-verified");
  } catch (error) {
    console.log(error);
  }
};

//Login methods

const loginLoad = async (req, res) => {
  try {
    res.render("login1");
  } catch (err) {
    console.log(err);
  }
};

const landingLoad = async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
  }
};

const verifyLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const pass = req.body.password;
    console.log("post req successful", email, pass);
    const userData = await User.findOne({ email: email });

    if (userData) {
      console.log("user found");
      const passMatch = await bcrypt.compare(pass, userData.password);
      if (passMatch) {
        console.log("pass match");
        console.log("KYC Status", userData.kycVerificationStatus);
        if (userData.is_verified === 0) {
          res.render("login", { message: "Verify email" });
        } else {
          req.session.user_id = userData._id;
          res.cookie("sessionId", req.sessionID);
          if (userData.kycVerificationStatus === "pending") {
            res.redirect("/KYC");
          } else {
            res.redirect(`/dashboard/users`);
          }
        }
      } else {
        res.render("login", { message: "Incorrect password" });
      }
    } else {
      res.render("login", { message: "Incorrect credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};

const loadHome = async (req, res) => {
  try {
    res.render("home");
  } catch (error) {
    console.log(error.message);
  }
};

const loadKYC = async (req, res) => {
  try {
    res.render("kyc");
  } catch (error) {
    console.log(error);
  }
};

const showEmailForm = async (req, res) => {
  try {
    res.render("login=email");
  } catch (error) {
    console.log(error.message);
  }
};

const KYCauth1 = async (req, res) => {
  try {
    userId = req.params.userId;
  } catch (error) {
    console.log(error);
  }
};
const KYCauth2 = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
const KYCauth3 = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const loadmyAccount = async (req, res) => {
  try {
    // if (!req.session.userId) {
    //     res.status(401).send('Unauthorized');
    //     res.redirect('/')
    //     return;
    // }else{
    console.log(req.session.user_id);
    const userId = req.session.user_id;
    const KYCtemp = await kyc.find({ userId: userId });
    console.log("KYC doc: ", KYCtemp[0]._doc);
    const user = await User.findById(userId);
    KYC = KYCtemp[0];
    console.log(userId, user._doc);
    res.render("account", { user, KYC });

    // }
  } catch (error) {
    console.log(error.message);
  }
};

const userLogout = async (req, res) => {
  try {
    req.session.destroy();
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

const submitEmail = async (req, res) => {
  try {
    // Retrieve OTP from Session or Database
    const savedOTP = req.session.otp; // Assuming you are using express-session middleware

    // Get user input from the request body
    const otp = req.body.otp;

    // Compare user input with saved OTP
    if (otp === savedOTP) {
      // OTP is valid
      // Perform further actions (e.g., account activation, password reset, etc.)
      res.render("");
    } else {
      // OTP is invalid
      res.render("verification-failure");
    }
  } catch (error) {
    console.log(error.message);
  }
};

function generateOTP(length) {
  const chars = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += chars[Math.floor(Math.random() * chars.length)];
  }
  return otp;
}

module.exports = {
  loadRegister,
  // addUser,
  verifyMail,
  loginLoad,
  verifyLogin,
  loadHome,
  loadKYC,
  KYCauth1,
  KYCauth2,
  KYCauth3,
  loadmyAccount,
  userLogout,
  showEmailForm,
  landingLoad,
  submitEmail,
};

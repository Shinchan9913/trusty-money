const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/trusty-money")

const express = require("express")
const app = express();

app.set('view engine', 'ejs')
app.set('views', './views/users')

//User route
// const userRoute = require('./routes/userRoutes')
const verifyRoute = require('./routes/verify');
const registerRoute = require('./routes/register');
app.use("/register", registerRoute)
app.use("/verify", verifyRoute)

app.get("/", (req, res)=>{
    res.render('email-verified')
});

app.listen(3000, function(){
    console.log("Server running on port 3000")
})
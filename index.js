const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/trusty-money")

const express = require("express")
const app = express();

//User route
const userRoute = require('./routes/userRoutes')
app.use('/', userRoute)

app.listen(3000, function(){
    console.log("Server running on port 3000")
})
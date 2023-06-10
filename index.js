const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/trusty-money")

const session = require('express-session')
const express = require("express")
const app = express();
const axios = require("axios")
const startRecurringPaymentScheduler = require('./schedulers/recurringPayment')

startRecurringPaymentScheduler();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('views'))

app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: true
    })
)

//User route
const userRoute = require('./routes/userRoutes')
app.use('/', userRoute)

//Txn route
const txnRoute = require('./routes/txnRoutes')
app.use('/dashboard', txnRoute)

const kycRoute = require('./routes/kycRoutes')
app.use('/KYC', kycRoute)

app.set('view engine', 'ejs')
app.set('views', './views/users')


app.get('/trialRoute', (req, res) => {
  try {
    res.render('trial')
  } catch (error) {
    console.log(error.message)
  }
})

const port = 5000 || config.port

app.listen(port, function(){
    console.log(`Server running on port ${port} http://localhost:${port}`)
})

app.get("/rate", function(req, res){
  axios.get('')
})

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    is_verified:{
        type: Number,
        default: 0
    },
    is_admin:{
        type:Number,
        required:true
    },
    image:{
        type:String,
    },
    kycVerificationStatus:{
        type:String,
        default:'pending',
    },
    bankAccounts: [{
        country: String,
        vbAccountNumber: String,
        routingNumber: String,
        accountType: String,
        bankName: String,
    }],
});

module.exports = mongoose.model('User', userSchema)
const mongoose = require("mongoose")
const encrypt = require('mongoose-encryption')
const config = require('../config/config')


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

// userSchema.plugin(encrypt, { secret: config.secret, encryptedFields: ['name', 'mobile', 'password', 'is_verified', 'is_admin', 'kycVerificationStatus', 'bankAccounts'] })

module.exports = mongoose.model('User', userSchema)
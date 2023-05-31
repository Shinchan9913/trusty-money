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
    accountNo:{
        type:String,
    },
    routingNo:{
        type:String,
    },
    accountType:{
        type:String,
    },
    bankName:{
        type:String,
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
    }

});

module.exports = mongoose.model('User', userSchema)
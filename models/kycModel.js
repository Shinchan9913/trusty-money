const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const encrypt = require('mongoose-encryption')
const config = require('../config/config')

const kycSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  panNumber: {
    type: String,
    required:true,
  },
  companyName: {
    type: String,
  },
  companyNickname: {
    type: String,
    default: function(){
        return this.companyName
    },
  },
  GSTIN:{
    type: Number,
  },
  companyWebsite:{
    type:String,
  },
  CIN:{
    type:String,
  },
  primaryBusiness:{
    type: String,
  },
  panImage:{
    type:String,
  },
  businessName:{
    type:String,
  },
  accountNumber:{
    type:String,
  },
  IFSC:{
    type:String,
  },
  bankName:{
    type:String,
  }
});

// kycSchema.plugin(encrypt, { secret: config.secret })

module.exports = mongoose.model('kyc', kycSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  txnId: {
    type: String,
  },
  amount: {
    type: Number,
    required: true
  },
  initiationDate: {
    type: Date,
    default: Date.now
  },
  companyName:{
    type: String,
  },
  companyContact:{
    type: String,
  },
  companyEmail:{
    type: String,
  },
  expectedDate:{
    type: Date,
  },
  country:{
    type:String
  },
  description:{
    type:String
  },
  isDraft:{
    type:String,
  },
  RBIpurposeCode:{
    type:String,
  },
  paymentStatus:{
    type:String,
    default: "Pending"
  }

});

module.exports = mongoose.model('Transaction', TransactionSchema);
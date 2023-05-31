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
    required:true,
  },
  amount: {
    type: Number,
    required: true
  },
  initiationDate: {
    type: Date,
    default: Date.now
  },
  customerName:{
    type: String,
  },
  paymentStatus:{
    type:String,
    default: "Pending"
  }

});

module.exports = mongoose.model('Transaction', TransactionSchema);
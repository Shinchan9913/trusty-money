const mongoose = require('mongoose')
const Schema = mongoose.Schema


const RecurringPaymentSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'custom'],
      required: true
    },
    customDays:{
        type: Number,
    },
    txnId: {
        type: Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true,
    }
    // other fields for recurring payment information
  });

module.exports = mongoose.model('RecurringPayment', RecurringPaymentSchema)
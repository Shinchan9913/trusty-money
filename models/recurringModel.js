const mongoose = require('mongoose')
const Schema = mongoose.Schema
const encrypt = require('mongoose-encryption')
const config = require('../config/config')

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

// RecurringPaymentSchema.plugin(encrypt, { secret: config.secret })

module.exports = mongoose.model('RecurringPayment', RecurringPaymentSchema)
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExchangeSchema = new Schema({
  currencyFrom: String,
  amountFrom: Number,
  currencyTo: String,
  amountTo: Number,
  type: String,
  timestamp: Number,
});

module.exports = mongoose.model('Exchanges', ExchangeSchema);
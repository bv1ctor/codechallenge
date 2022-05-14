const ExchangeModel = require('../models');

const createNewExchange = async function(exchangeObj) {
  const exchangeItem = new ExchangeModel({ ...exchangeObj });

  try {
    await exchangeItem.save();
  } catch (e) {
    console.log(e);
  }
};

const createMultipleExchanges = async function(arrayOfExchanges) {

  try {
    await ExchangeModel.insertMany(arrayOfExchanges);
  } catch (e) {
    console.log(e);
  }

};

const getAllExchanges = async function() {
  return await ExchangeModel.find({}).exec();
}

module.exports = {
  createNewExchange,
  createMultipleExchanges,
  getAllExchanges,
}
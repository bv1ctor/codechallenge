const constants = require('../constants/constants');

function getOptions(coinKey) {
  return  {
    method: 'GET',
    url: `${constants.CURRENCY_API}/${coinKey}/${constants.USD_KEY}`,
    headers: {
      'X-CoinAPI-Key': process.env.CURRENCY_API_KEY
    }
  }
}

function parseResponseData(coinKey, responseData) {
  const data = responseData.data;

  const rate = data.rate;
  const amountFrom = Math.floor(Math.random() * 10); // Generate random amount of coins (1..10)

  const amountTo = Math.round(amountFrom * rate * 100) / 100; // Rounding price

  return {
    currencyFrom: coinKey,
    amountFrom: amountFrom,
    currencyTo: constants.USD_KEY,
    amountTo: amountTo,
    type: constants.LIVE_EXCHANGE_KEY,
    timestamp: Date.now(),
  };
}


module.exports = {
  getOptions,
  parseResponseData,
}
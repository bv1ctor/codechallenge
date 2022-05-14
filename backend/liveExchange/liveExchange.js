const axios = require("axios");
const constants = require("../constants/constants");
const dotenv = require("dotenv");
const api = require('../api');
const { getOptions, parseResponseData } = require('./service');

dotenv.config();

function liveExchange() {
  setInterval(() => {

    console.log('Live Exchange triggered!');
    const ethOptions = getOptions(constants.ETH_KEY);
    const btcOptions = getOptions(constants.BTC_KEY);

    Promise.all([axios.request(ethOptions), axios.request(btcOptions)])
      .then(function (response) {
        const [ethResponse, btcResponse] = response;

        const btcExchange = parseResponseData(constants.BTC_KEY, btcResponse);
        const ethExchange = parseResponseData(constants.ETH_KEY, ethResponse);

        api.createMultipleExchanges([btcExchange, ethExchange]);

    }).catch(function (error) {
      console.error(error);
    });
  }, constants.ONE_MINUTE_INTERVAL * constants.MINUTES_AMOUNT);

}

module.exports = liveExchange;
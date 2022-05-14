const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const liveFetch = require('./liveExchange/liveExchange');

const PORT = 5000;

dotenv.config();

const app = express();

app.use(cors({
  origin: '*',
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

Promise.resolve()
  .then(() => {
    /*** Db connection ***/

    const dbConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cctnn.mongodb.net/codeChallenge?retryWrites=true&w=majority`;
    mongoose.connect(dbConnectionString);

    mongoose.connection.on("error", function(error) {
      if (process.env.NODE_ENV === "development") {
        console.log(error)
      }
    });

    mongoose.connection.on("open", function() {
      console.log("Connected to MongoDB database.")
    });

    /*** ***/
  })
  .then(() => {

    /*** Initialise live fetching ***/

    liveFetch();

    /*** ***/
  });




app.listen(PORT, function() {
  console.log(`Express app listening port ${PORT}`);

});
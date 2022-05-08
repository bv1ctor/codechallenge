const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 5000;

const app = express();

app.use(cors({
  origin: '*',
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, function() {
  console.log(`Express app listening port ${PORT}`);
});
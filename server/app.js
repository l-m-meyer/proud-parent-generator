require('dotenv').config();
const { ENVIRONMENT, PORT } = process.env;
const cors = require(cors);
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// middleware
app.use(morgan(ENVIRONMENT));
app.use(cors());
app.use(bodyParser.json());

// routes import
const catsRoutes = require('./routes/catRoutes');

// routes
app.use('/cats', catsRoutes());

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
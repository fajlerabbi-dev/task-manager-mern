const express = require('express');
const { default: mongoose } = require('mongoose');

const app = new express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// import security middleware
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const expressMongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const helmet = require('helmet');
const xssClean = require('xss-clean');
const router = require('./src/routes/api');

// implement security middleware
app.use(cors());
app.use(expressMongoSanitize());
app.use(hpp());
app.use(helmet());
app.use(xssClean());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});
app.use(limiter);

// database connection

const uri =
  'mongodb+srv://fajlerabbi824:fajlerr2604@task-manager-2023.nmix28y.mongodb.net/task-manager';
const options = { autoIndex: true };
mongoose
  .connect(uri, options)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

// application routes
app.use('/api/v1', router);
app.use('*', (req, res) => {
  res.status(400).json({ status: 'Fail', data: '404 Not Found!' });
});

// module exports
module.exports = app;

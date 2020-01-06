const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// DB COnnection
require("./src/database/connection");

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));


module.exports = app;

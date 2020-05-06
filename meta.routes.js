const express = require('express');
const app = express();
const usersRouter = require('./routes');

// Route for the user information
app.use('/users', usersRouter);

module.exports = app;

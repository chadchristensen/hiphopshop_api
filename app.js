const express = require('express');
const createError = require('http-errors');
const { postRouter } = require('./controllers/postController.js');

const app = express();
app.disable('x-powered-by');

app.use(express.json());
app.use('/api/v1/posts', postRouter);

app.use(function(req, res, next) {
  next(createError.NotFound(`${req.path} route does not exist`));
});

if (process.env.NODE_ENV === 'production') {
  // Do not send stack trace of error message when in production
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send('Error occurred while handling the request.');
  });
} else {
  // Log stack trace of error message while in development
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
    res.json({
      statusCode: err.status,
      message: err.message,
    });
  });
}

module.exports = app;
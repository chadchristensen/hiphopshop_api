const express = require('express');
const createError = require('http-errors');
const { errors } = require('celebrate');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');
const blogPostRouter = require('./features/blogpost/blogpost.router');

const app = express();
app.disable('x-powered-by');

app.use(logger('dev'));
app.use(express.json());

// Route to swagger api docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/blogposts', blogPostRouter);

app.use(function(req, res, next) {
  next(createError.NotFound(`${req.path} route does not exist`));
});

app.use(errors());

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

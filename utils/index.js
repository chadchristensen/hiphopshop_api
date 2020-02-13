const createError = require('http-errors');

const asyncHandler = cb => async (req, res, next) => {
  try {
    await cb(req, res, next);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(error => error.message);
      return next(createError.BadRequest(errors));
    }
    return next(error);
  }
};

module.exports = { asyncHandler };

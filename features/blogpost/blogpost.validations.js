const { celebrate, Joi, Segments } = require('celebrate');

exports.createBlogPost = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    productUrl: Joi.string().required(),
    imageUrl: Joi.string().required(),
  }),
});

exports.blogPostId = celebrate({
  [Segments.PARAMS]: {
    blogPostId: Joi.number()
      .integer()
      .required(),
  },
});

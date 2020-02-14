const { Router } = require('express');
const blogPostController = require('./blogpost.controller');
const validations = require('./blogpost.validations');

const blogPostRouter = Router();

blogPostRouter
  .route('/')
  .get(blogPostController.getAllBlogPosts)
  .post(validations.createBlogPost, blogPostController.createBlogPost);

blogPostRouter
  .route('/:blogPostId')
  .get(validations.blogPostId, blogPostController.getBlogPostById)
  // TODO: Add input validation for updating blog post
  .put(validations.blogPostId, blogPostController.updateBlogPost)
  .delete(validations.blogPostId, blogPostController.deleteBlogPost);

module.exports = blogPostRouter;

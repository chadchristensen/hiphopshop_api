const { Router } = require('express');

const blogPostController = require('./blogpost.controller');

const blogPostRouter = Router();

blogPostRouter
  .route('/')
  .get(blogPostController.getAllBlogPosts)
  .post(blogPostController.createBlogPost);

blogPostRouter
  .route('/:blogPostId')
  .get(blogPostController.getBlogPostById)
  .put(blogPostController.updateBlogPost)
  .delete(blogPostController.deleteBlogPost);

module.exports = blogPostRouter;

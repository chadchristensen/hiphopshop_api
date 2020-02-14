const express = require('express');
const createError = require('http-errors');

const blogPostRouter = express.Router();
const blogPostService = require('./blogpost.service.js');
const { asyncHandler } = require('../../utils');

blogPostRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const blogPosts = await blogPostService.getAllBlogPosts();
    res.json(blogPosts);
  })
);

blogPostRouter.post(
  '/',
  // TODO: Add celebrate to validate input
  asyncHandler(async (req, res) => {
    const newBlogPost = await blogPostService.createBlogPost(req.body);
    res.status(201).json(newBlogPost);
  })
);

blogPostRouter.get(
  '/:postId',
  asyncHandler(async (req, res) => {
    const { postId } = req.params;
    const blogPost = await blogPostService.getBlogPostById(postId);

    if (!blogPost) {
      throw createError.NotFound(`No blog post found with the id of ${postId}`);
    }

    res.json(blogPost);
  })
);

blogPostRouter.put(
  '/:postId',
  asyncHandler(async (req, res) => {
    const { postId } = req.params;
    const [wasUpdated, updatedBlogPost] = await blogPostService.updateBlogPost(
      postId,
      req.body
    );

    if (!wasUpdated) {
      throw createError.NotFound(`No blog post found with the id of ${postId}`);
    }

    res.json(updatedBlogPost);
  })
);

blogPostRouter.delete(
  '/:postId',
  asyncHandler(async (req, res) => {
    await blogPostService.deletePost(req.params.postId);
    res.status(204).send();
  })
);

module.exports = {
  blogPostRouter,
};

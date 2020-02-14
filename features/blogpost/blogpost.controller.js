const createError = require('http-errors');

const blogPostService = require('./blogpost.service.js');
const { asyncHandler } = require('../../utils');

exports.getAllBlogPosts = asyncHandler(async (req, res) => {
  const blogPosts = await blogPostService.getAllBlogPosts();
  res.json(blogPosts);
});

exports.createBlogPost = asyncHandler(async (req, res) => {
  const newBlogPost = await blogPostService.createBlogPost(req.body);
  res.status(201).json(newBlogPost);
});

exports.getBlogPostById = asyncHandler(async (req, res) => {
  const { blogPostId } = req.params;
  const blogPost = await blogPostService.getBlogPostById(blogPostId);

  if (!blogPost) {
    throw createError.NotFound(
      `No blog post found with the id of ${blogPostId}`
    );
  }

  res.json(blogPost);
});

exports.updateBlogPost = asyncHandler(async (req, res) => {
  const { blogPostId } = req.params;
  const [wasUpdated, updatedBlogPost] = await blogPostService.updateBlogPost(
    blogPostId,
    req.body
  );

  if (!wasUpdated) {
    throw createError.NotFound(
      `No blog post found with the id of ${blogPostId}`
    );
  }

  res.json(updatedBlogPost);
});

exports.deleteBlogPost = asyncHandler(async (req, res) => {
  const { blogPostId } = req.params;
  await blogPostService.deleteBlogPost(blogPostId);
  res.status(204).send();
});

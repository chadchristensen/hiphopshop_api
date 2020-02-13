const express = require('express');
const createError = require('http-errors');

const postRouter = express.Router();
const postApi = require('../models/post.js');
const { asyncHandler } = require('../utils');

postRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const posts = await postApi.getAllPosts();
    res.json(posts);
  })
);

postRouter.post(
  '/',
  asyncHandler(async (req, res) => {
    const newPost = await postApi.createPost(req.body);
    res.status(201).json(newPost);
  })
);

postRouter.get(
  '/:postId',
  asyncHandler(async (req, res) => {
    const { postId } = req.params;
    const post = await postApi.getPostById(postId);

    if (!post) {
      throw createError.NotFound(`No blog post found with the id of ${postId}`);
    }

    res.json(post);
  })
);

postRouter.put(
  '/:postId',
  asyncHandler(async (req, res) => {
    const post = await postApi.findByPk(req.params.postId);

    if (!post) {
      res.status(404).send();
    }
    const updatedPost = await postApi.updatePost(post, req.body);

    res.json(updatedPost);
  })
);

postRouter.delete(
  '/:postId',
  asyncHandler(async (req, res) => {
    const post = await postApi.getPostById(req.params.postId);

    if (!post) {
      res.status(404).send();
    }

    await postApi.deletePost(post);
    res.status(204).send();
  })
);

module.exports = {
  postRouter,
};

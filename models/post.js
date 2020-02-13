const { sequelize, Sequelize } = require('../db');

class Post extends Sequelize.Model {}

Post.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please provide a value for "title"',
        },
        notNull: {
          msg: 'Please provide a value for "title"',
        },
      },
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please provide a value for "body"',
        },
        notNull: {
          msg: 'Please provide a value for "body"',
        },
      },
    },
    productURL: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please provide a value for "productURL"',
        },
        notNull: {
          msg: 'Please provide a value for "productURL"',
        },
        isUrl: {
          msg:
            'productURL must be in the format of a URL e.g. www.placecage.com',
        },
      },
    },
    publishDate: {
      type: Sequelize.DATEONLY,
    },
    photoURL: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please provide a value for "photoURL"',
        },
        notNull: {
          msg: 'Please provide a value for "photoURL"',
        },
        isUrl: {
          msg: 'photoURL must be in the format of a URL e.g. www.placecage.com',
        },
      },
    },
  },
  { sequelize }
);

const getAllPosts = () => Post.findAll();

const createPost = postObject => Post.create(postObject);

const getPostById = postId => Post.findByPk(postId);

const updatePost = (post, updatedPost) => post.update(updatedPost);

const deletePost = post => post.destroy();

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
};

const { BlogPost } = require('../../models');

function getAllBlogPosts() {
  return BlogPost.findAll();
}

function getBlogPostById(blogPostId) {
  return BlogPost.findByPk(blogPostId);
}

function createBlogPost(blogPost) {
  return BlogPost.create(blogPost);
}

function updateBlogPost(blogPostId, updatedBlogPost) {
  // TODO: test what this returns when blogPostId passed in is for a post that does not exist
  return BlogPost.update(updatedBlogPost, {
    where: {
      id: blogPostId,
    },
    returning: true,
  });
}

function deleteBlogPost(blogPostId) {
  // TODO: test what this returns when blogPostId passed in is for a post that does not exist
  return BlogPost.destroy({ where: { id: blogPostId } });
}

module.exports = {
  getAllBlogPosts,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};

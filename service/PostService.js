const Post = require("../posts/post-schema");

class PostService {
  async create(post){
      const createdPost = await Post.create(post);
      return createdPost;
  }

  async getAll() {
      const posts = await Post.find();
      return posts;
  }

  async getOne(id) {
      if (!id) throw new Error('ID was not specified')
      const post = await Post.findById(id)
      return post
  }

  async update(post) {
      if (!post._id) throw new Error('ID was not specified')

      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
      return updatedPost
  }

  async delete(id) {
      if (!id) throw new Error('ID was not specified')

      const post = await Post.findByIdAndDelete(id);
      return post;
  }
}

module.exports = new PostService();

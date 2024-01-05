const Post = require("../posts/post-schema.js");

class PostService {
  async create(post, picture){
      return (await Post.create(post));
  }

  async getAll() {
        return (await Post.find());
  }

  async getOne(id) {
      if (!id) throw new Error('ID was not specified')
      return (await Post.findById(id))
  }

  async update(post) {
      if (!post._id) throw new Error('ID was not specified')
      return (await Post.findByIdAndUpdate(post._id, post, {new: true}))
  }

  async delete(id) {
      if (!id) throw new Error('ID was not specified')
      return (await Post.findByIdAndDelete(id));
  }
}

module.exports = new PostService();

const Post = require("../posts/post-schema.js");

class PostController {
  async create( req, res ){
    try {
      const {author, title, content, picture} = req.body;
      const post = await Post.create({author, title, content, picture})
      res.json(post)
    }
    catch (err) {
      res.status(500).json(err)
    }
  }

  async getAll(req, res) {

  }

  async getOne(req, res) {

  }

  async update(req, res) {

  }

  async delete(req, res) {

  }
}

module.exports = new PostController()

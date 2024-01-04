const Router = require('express')
const Post = require("../posts/post-schema.js");

const router = new Router()

router.post('/posts', async (req, res) => {
  try {
    const {author, title, content, picture} = req.body;
    const post = await Post.create({author, title, content, picture})
    res.json(post)
  }
  catch (err) {
    res.status(500).json(err)
  }
})
router.get('/posts')
router.get('/posts/:postId')
router.put('/posts')
router.delete('/posts/:postId')

module.exports = router

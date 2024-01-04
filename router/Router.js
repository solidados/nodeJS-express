const Router = require('express')
const PostController = require('../controllers/PostController.js')

const router = new Router()

router.post('/posts', PostController.create)
router.get('/posts')
router.get('/posts/:postId')
router.put('/posts')
router.delete('/posts/:postId')

module.exports = router

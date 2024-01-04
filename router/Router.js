const Router = require('express')
const PostController = require('../controllers/PostController.js')

const router = new Router()

router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:postId', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:postId', PostController.delete)

module.exports = router

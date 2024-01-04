const Router = require('express')

const router = new Router()

router.post('/posts')
router.get('/posts')
router.get('/posts/:postId')
router.put('/posts')
router.delete('/posts/:postId')

module.exports = router

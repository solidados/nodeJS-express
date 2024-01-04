const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const Post = require('./posts/post-schema')

const PORT = process.env.PORT || 5000
const MONGO_DB = process.env.MONGO_DB;

const app = express()

app.use(express.json())

/** All requests to DB are async, so I add async..await
 * that requests to DB would not block the main Thread*/
app.post('/', async (req, res) => {
  try {
    const {author, title, content, picture} = req.body;
    const post = await Post.create({author, title, content, picture})
    res.json(post)
  }
  catch (err) {
    res.status(500).json(err)
  }
})

async function startApp () {
  try {
    await mongoose.connect(MONGO_DB)
    app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
  }
  catch (err) {
    console.error(err.message)
  }
}

startApp()

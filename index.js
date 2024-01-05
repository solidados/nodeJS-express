const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/Router.js')
const fileUpload = require('express-fileupload')

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000
const MONGO_DB = process.env.MONGO_DB;

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

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

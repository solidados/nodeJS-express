const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000
// const MONGO_DB = process.env.MONGO_DB;
const MONGO_DB = `mongodb+srv://admuser:ABCabc123@node-js-cluster.hl2zddt.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  res.status(200).json('Server works...')
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

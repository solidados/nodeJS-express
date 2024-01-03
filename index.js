const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())

app.listen(PORT, ()=> console.log(`Server started on PORT: ${PORT}`))

app.post('/', (req, res) => {
  res.status(200).json('Server works...')
})




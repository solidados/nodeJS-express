const express = require('express');
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => res.status(200).json('Server works...'))

app.listen(PORT, ()=> console.log(`Server started on PORT: ${PORT}`))



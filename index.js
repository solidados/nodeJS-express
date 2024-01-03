const express = require('express');
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.listen(PORT, ()=> console.log(`Server started on PORT: ${PORT}`))



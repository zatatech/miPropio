const express = require('express')
const app = express()
const path = require("path")
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT || 4500

//MIDDLEWARES

app.use(express.static(path.join(__dirname, 'public')))



app.listen(PORT,() => { 
    console.log(`hola en el puerto ${PORT} `)
})







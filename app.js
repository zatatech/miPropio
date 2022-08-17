const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 4500

app.get('/', (req, res) => {
    console.log('hoola')
    res.send('Primer Get')
})


app.listen(PORT,() => { 
    console.log(`hola en el puerto ${PORT} `)
})







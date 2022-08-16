const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('hoola')
    res.send('holass')
})

app.listen(4500,() => { 
    console.log("hola en el puerto 4500")
})







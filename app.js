const express = require('express')
const app = express()
const path = require("path")
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT || 4500

//MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@development.jjjfyew.mongodb.net/?retryWrites=true&w=majority`
)
.then((result) => {
    console.log("bd ok")
    app.listen(PORT,()=>{ console.log(`server escuchando puerto ${PORT}`)})
    })
.catch((err) => {
    console.log("bd NO ok")
    })

const productSchema = mongoose.Schema({
    name:{type:String,required:true},
    price: Number,
})
const Product = mongoose.model('Product', productSchema)

// https://funnyfrontend.com/introduccion-al-stack-mean-4-rutas-routing-con-nodejs-y-express/





app.post ('/api/v1/products', (req,res)=>{
    //console.log('peticion recibida')
    //console.log({body:req.body})

    const newProduct = new Product (req.body)
    newProduct
        .save()
        .then((result)=>{ res.status(201).json({ok:true})})
        .catch((err)=>console.log(err))
})












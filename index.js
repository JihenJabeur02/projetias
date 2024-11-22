const express=require('express')
const app=express()
const db =require('./db/index')
const f=require('./models/industry')
const industryRouter = require('./routes/industries')
const cors=require('cors')
const g=require('./models/product')
const productsRouter = require('./routes/products')
const h=require('./models/Cart')
const CartRouter = require('./routes/Cart')
app.use(cors())
app.use(express.json())

app.use('/industries',industryRouter)
app.use('/products',productsRouter)
app.use('/Cart',CartRouter)
app.listen(5000,()=>{
    console.log('listening on port 5000')
})
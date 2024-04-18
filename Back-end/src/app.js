const express= require('express');
const productRouter = require('./router/productRouter');
const app= express()
const cors= require("cors");

app.use(cors())
app.use(express.json())

app.use('/api/product/',productRouter)

module.exports=app;

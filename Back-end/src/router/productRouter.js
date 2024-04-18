const express = require ('express');
const productController= require('../controller/productConroller');
const productRouter= express.Router();

productRouter.post('/addpost',(productController.addProduct))
.get('/allproduct',productController.getPost)
.get('/product/:id',productController.getPostById)
.put('/update',productController.updatePost)
.delete('/delete/:id',productController.deleleProduct)

module.exports=productRouter;
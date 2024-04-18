const mongoose= require ('mongoose');

const productSchema = new mongoose.Schema({
    title:String,
    price:String,
    image:String,
    categary:String
})

module.exports= mongoose.model('Product',productSchema)
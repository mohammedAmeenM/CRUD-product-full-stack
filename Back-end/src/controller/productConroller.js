const Product = require("../model/productSchema");

const addProduct = async (req, res) => {
  const { title, price, image, categary } = req.body;
  console.log(title);
  try {
    const newPro = await Product.create({ title, price, image, categary });
    if (!newPro) {
      res.status(404).json({
        error: "product created faild",
      });
    }
    res.status(201).json({
      status: "success created product",
      product: newPro,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "inernal server error" });
  }
};

const getPost = async (req, res) => {
  try {
    const product = await Product.find();
    if (!product) {
      res.status(404).json({
        message: "product not found",
      });
    }
    res.status(200).json({
      message: "successfully fetched datas",
      product,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "inernal server error" });
  }
};

const getPostById= async (req,res)=>{
    try {
        const productId=req.params.id;
        const product = await Product.findById(productId)
        if(!product){
            res.status(404).json({
                message: "product not found",
            })
        }
        res.status(200).json({
            message:"successfully fetch product",
            product
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "inernal server error" });
    }
}

const updatePost = async (req, res) => {
  try {
    const { id, title, price, image, categary } = req.body;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        status: "fail",
        message: "Product not found in the database",
      });
    }
    const update = await Product.findByIdAndUpdate(
      { _id: id },
      { title,  price, image, categary },
      { new: true }
    );

    res.status(201).json({
      status: "success",
      message: "Successfully updated",
      product: update,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "inernal server error" });
  }
};

const deleleProduct= async (req,res)=>{
    try {
        const productId= req.params.id;
        console.log(productId)
        const delProduct= await Product.findByIdAndDelete({_id:productId});
        if(!delProduct){
            res.status(404).json({
                message:'post not found'
            })
        }
        res.status(200).json({
            message:'successfully deleted product '
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "inernal server error" });
    }
}

module.exports = {
  addProduct,
  getPost,
  updatePost,
  deleleProduct,
  getPostById
};

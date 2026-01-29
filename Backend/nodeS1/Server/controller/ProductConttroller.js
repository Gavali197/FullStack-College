// let product = [
//     {
//         id: 1,
//         name: "shirt",
//         price: 350
//     },

//     {
//         id: 1,
//         name: "watch",
//         price: 470
//     },

//     {
//         id: 3,
//         name: "chocklate",
//         price: 200
//     }

// ]

const product = require("../models/product");
const Product = require("../models/product");

exports.getProduct = async(req, res, next) => {
    try{
        const products = await product.find();
        res.json(products);
    }catch(err){
        next(err);
    }
}
// GET
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// POST
exports.addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

// DELETE
exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    next(error);
  }
};


exports.updateProduct = async(req, res, next) => {
  try{
    await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new : true,
        runValidators :true
      }
    );


    if(!this.updateProduct){
      return res.status(401).json( {
        message : "Not Found"
      })

      // res.json({
      //   message:"Product Update Successfully",
      //   product: this.updateProduct
      // });

    }
     res.json({
        message:"Product Update Successfully",
        product: this.updateProduct
      });
  }catch(err){
      next(err + "Issue In Update")
    }
}
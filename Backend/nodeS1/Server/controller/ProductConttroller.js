let product = [
    {
        id: 1,
        name:"shirt",
        price:350
    },

    {
        id: 1,
        name:"watch",
        price:470
    },

    {
        id: 3,
        name:"chocklate",
        price:200
    }

]



exports.getProduct = (req, res)=>{
    res.json(product);
}

exports.addProduct = (req, res) => {
    const newProduct = res.body;
    product.push(newProduct);

    res.status(201).json({
        message: "Product added Successfully",
        product
    });
} 

exports.deleteProduct = (req, res)=>{
    const id = parseInt(req.params.id);
    product = product.filter(p=> p.id !== id);

    res.json({
        message : "Product Delete Successfully",
        product
    })
}

// export default product
const ProductModel = require('../../model/productModel');


const addProduct = (req,res) => {

    const reqBody = req.body;
    
    let newProduct = new ProductModel(reqBody);

    newProduct.save()
        .then(() => res.send('Product added successfully'))
        .catch(err => console.log(err))

}

module.exports = addProduct;
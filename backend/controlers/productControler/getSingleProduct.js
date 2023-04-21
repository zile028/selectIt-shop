const ProductModel = require("../../model/productModel");

const findSingleProduct = (req, res) => {
    const productId = req.params.id;

    ProductModel.findOne({_id: productId})
        .then((product) => {
            res.send(product)
        })
        .catch((error) => {
            res.send(error)
        })
}

module.exports = findSingleProduct
const ProductModel = require("../../model/productModel");

const pagination = async (req, res) => {
    const search = req.params.search
    const limit = parseInt(req.params.limit)
    const page = parseInt(req.params.page)
    
    let count = await ProductModel.count({})

    ProductModel.find({
        title: {$regex: search, $options: "i"}
    }, null, {
        limit: limit,
        skip: (page - 1) * limit
    })
        .then((products) => {
            res.send({products})
        })
        .catch((err) => {
            res.status(415).send(err)
        })
}

module.exports = pagination
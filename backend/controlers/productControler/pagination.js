const ProductModel = require("../../model/productModel");

const pagination = async (req, res) => {
    const limit = parseInt(req.params.limit)
    const page = parseInt(req.params.page)

    let count = await ProductModel.count({})

    ProductModel.find({}, null, {
        limit: limit,
        skip: (page - 1) * limit
    })
        .then((products) => {
            res.send({products, count})
        })
        .catch((err) => {
            res.status(415).send(err)
        })
}

module.exports = pagination
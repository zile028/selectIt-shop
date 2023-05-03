const ProductModel = require("../../model/productModel");

const searchResults = (req, res) => {
    const searchTerm = req.query.term ? req.query.term : null;
    const categoryId = req.query.category ? req.query.category : null;

    let query = [{category: categoryId}]

    if (searchTerm) {
        query = [...query,
            {title: {$regex: searchTerm, $options: "i"}},
            {description: {$regex: searchTerm, $options: "i"}},
        ]
    }

    ProductModel.find({
        $or: query,
    })
        .then(data => res.send(data))
        .catch(err => res.send(err))
}

module.exports = searchResults
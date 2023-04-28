const ProductModel = require("../../model/productModel");

const searchResults = (req, res) => {

    const searchTerm = req.params.term;
    
    ProductModel.find({ title: { $regex: searchTerm, $options: "i"}})
        .then(data => res.send(data))
        .catch(err => res.send(err))

    

}

module.exports = searchResults
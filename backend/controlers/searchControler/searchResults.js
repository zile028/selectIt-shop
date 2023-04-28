const ProductModel = require("../../model/productModel");

const searchResults = (req, res) => {

    const searchTerm = req.params.term;
    const categoryId = req.params.cat;
    
    ProductModel.find({ 
        //categoryId je string, a category je Object
        category: categoryId,
        title: { $regex: searchTerm, $options: "i"},
    })
        .then(data => res.send(data))
        .catch(err => res.send(err))

}

module.exports = searchResults
const CategoryModel = require('../../model/categoryModel');

const categories = async (req, res) => {
   
    CategoryModel.find({})
        .then((el) => {
            res.send(el)
        })
        .catch((err) => res.send(err));
}

module.exports = categories
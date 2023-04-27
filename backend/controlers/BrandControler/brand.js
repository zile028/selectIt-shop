const BrandModel = require('../../model/brandModel');

const brand = (req,res) => {

    BrandModel.find({})
        .then(el => res.send(el))
}

module.exports = brand;
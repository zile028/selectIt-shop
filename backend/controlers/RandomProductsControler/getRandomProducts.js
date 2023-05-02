const ProductModel = require("../../model/productModel");

const getRandomProduct = (req, res) => {
    const productNumber = req.params.number;
    
    ProductModel.find({})
        .then(data => {
            let dataCopy = [...data]
            let randomProducts = []

            for (let i = 0; i < productNumber; i++) {
                let random = Math.floor(Math.random() * dataCopy.length)
                randomProducts.push(dataCopy[random])
                dataCopy.splice(random, 1)
            }

            res.send(randomProducts)
        })
        .catch(error => console.log(error))
}

module.exports = getRandomProduct
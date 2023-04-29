const ProductModel = require("../../model/productModel");
const {isValidObjectId} = require("mongoose");

const findSingleProduct = (req, res) => {
    const productId = req.params.id;


    ProductModel.aggregate(
        [
            {$addFields: {convertedId: {$toString: "$_id"}}},
            {$match: {convertedId: productId}},
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "categoryName",
                    pipeline: [
                        {
                            $project: {name: 1, _id: 0}
                        }
                    ]
                }
            },
            {
                $lookup: {
                    from: "brands",
                    localField: "brand",
                    foreignField: "_id",
                    as: "brandName",
                    pipeline: [
                        {
                            $project: {name: 1, _id: 0}
                        }
                    ]
                }
            },
            {
                $project: {category: 0, brand: 0}
            }
        ]
    )
        .then((product) => {
            res.send(product[0])
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
   
}

module.exports = findSingleProduct
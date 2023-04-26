const CategoryModel = require("../../model/categoryModel");

const PaginationCategory = (req, res) => {
    const limit = parseInt(req.params.limit)
    const page = (parseInt(req.params.page) - 1) * limit
    const category = req.params.category


    CategoryModel.aggregate([
        {$match: {name: category}},
        {
            $lookup: {
                from: "products",
                localField: "_id",
                foreignField: "category",
                as: "products",
                pipeline: [{
                    $lookup: {
                        from: "brands",
                        localField: "brand",
                        foreignField: "_id",
                        as: "brandName"
                    }
                }]
            }
        },
        {$addFields: {count: {$size: "$products"}}},
        {
            $project: {
                products: {$slice: ["$products", page, limit]},
                count: 1
            }
        }


    ]).then((result) => {
        res.send(result[0])
    })
        .catch((err) => {
            console.log(err)
            res.status(415).send(err)
        })

}

module.exports = PaginationCategory
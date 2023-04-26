const CategoryModel = require("../../model/categoryModel");

const categories = async (req, res) => {
    CategoryModel.aggregate([
        {
        $lookup: {
            from: "products",
            localField: "_id",
            foreignField: "category",
            as: "products",
            pipeline: [
            {
                $lookup: {
                from: "brands",
                localField: "brand",
                foreignField: "_id",
                as: "brandName",
                },
            },
            ],
        },
        },
        { $addFields: { count: { $size: "$products" } } },
        {
        $project: {
            name: 1,
            products: 1,
            count: 1,
        },
        },
    ])
        .then((el) => {
        res.send(el);
        })
        .catch((err) => res.send(err));
};

module.exports = categories;

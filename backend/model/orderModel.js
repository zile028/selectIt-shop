const {Schema, model} = require("mongoose")

const ArticleSchema = new Schema({
    productId: {type: Schema.Types.ObjectId, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true}
}, {_id: false})

const OrderSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    postCode: {type: String, required: true},
    totalPrice: {type: Number, required: true},
    products: {
        type: [ArticleSchema],
        validate: {
            validator: (product) => {
                return product.length > 0
            },
            message: "Not allowed 0 products!"
        }
    },
})

const OrderModel = model("orders", OrderSchema)
module.exports = OrderModel
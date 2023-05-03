const OrderModel = require("../../model/orderModel");
const addOrder = (req, res) => {
    console.log(req.body)
    const newOrder = new OrderModel(req.body)

    newOrder.save()
        .then((order) => {
            res.send(order)
        })
        .catch((err) => {
            console.log(err)
            res.status(415).send(err.message)
        })
}

module.exports = addOrder
const OrderModel = require("../../model/orderModel")


const allOrder = (req, res) => {
    let user = req.locals

    const userEmail = req.params.email

    OrderModel.find({email: userEmail})
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((error) => {
            res.send(error)
        })
}

module.exports = allOrder
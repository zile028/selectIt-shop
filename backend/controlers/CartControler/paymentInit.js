const sk = "sk_test_51L7wtIJF8VzxjIeZs8urRdMGDtQA55amnDcalknPICydxNxzcCGCJK0Sb5GOxi9s6ujO1ttV5jeBjbzwhCCcWe1D00wyLnWtuC"
const stripe = require("stripe")(sk)

const paymentInit = async (req, res) => {
    try {
        const payment = await stripe.paymentIntents.create({
            amount: req.body.totalPrice,
            currency: req.body.currency,
            automatic_payment_methods: {enabled: true}
        })
        res.send(payment.client_secret)
    } catch (err) {
        console.log(err)
        res.status(415).send(err)
    }

}

module.exports = paymentInit
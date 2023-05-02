import React, {useEffect, useState} from 'react';
import CartService from "../../services/CartService";
import {useSelector} from "react-redux";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import PaymentElementComponent from "../../component/PaymentElementComponent/PaymentElementComponent";

const pk = "pk_test_51L7wtIJF8VzxjIeZdUBQd9nRor67YNBGlgmnLC45eKWbYousA7z6qDve7hTB4D8PGU6tm1MKuBg5fAR8Yg8d9FE700T6MybNoZ"
const stripe = loadStripe(pk)

function PaymentInitPage() {
    const {totalPrice} = useSelector((state) => state.cartStore)
    const [ck, setCk] = useState(null)
    useEffect(() => {
        totalPrice > 0 && CartService.paymentInit({totalPrice, currency: "usd"})
            .then((res) => {
                setCk(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [totalPrice])

    return (
        <div className="container py-5">
            <h2>Payment page</h2>
            {ck && <Elements stripe={stripe} options={{clientSecret: ck}}>
                <PaymentElementComponent ck={ck}/>
            </Elements>}
        </div>
    );
}

export default PaymentInitPage;
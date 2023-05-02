import React from 'react';
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {toast} from "react-toastify";
import {routes} from "../../router/routes";

function PaymentElementComponent({ck}) {
    const stripe = useStripe()
    const elements = useElements()


    const handlePay = () => {
        if (!stripe || !elements || !ck) {
            return toast.error("Error while payment")
        }
        stripe.confirmPayment({
            elements: elements,
            confirmParams: {
                return_url: routes.ORDER.url
            }
        })
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <PaymentElement/>
                    <button className="button button--primary mt-3" onClick={handlePay}>Pay</button>
                </div>
            </div>
        </div>
    );
}

export default PaymentElementComponent;
import React, {useEffect} from 'react';
import CartService from "../../services/CartService";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {clearCart} from "../../store/cartSlice";

function OrderPage() {
    const [searchParam] = useSearchParams()
    const {user} = useSelector((state) => state.userStore)
    const {cart, totalPrice} = useSelector((state) => state.cartStore)
    const isSuccess = searchParam.get("redirect_status") === "succeeded"
    const dispatch = useDispatch()

    useEffect(() => {
        let products = cart.map((el) => {
            return {
                productId: el._id,
                title: el.title,
                price: el.price,
                quantity: el.quantity
            }
        })

        isSuccess && CartService.addOrder({
            ...user, totalPrice, products
        })
            .then((res) => {
                console.log(res.data)
                dispatch(clearCart())

            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div className="container py-5">
            <h2>Order</h2>
        </div>
    );
}

export default OrderPage;
import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {LS_CART, LS_USER} from "../config/config";
import {useDispatch} from "react-redux";
import {restoreUser} from "../store/userSlice";
import {restoreCart} from "../store/cartSlice";

function RootLayout() {
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.hasOwnProperty(LS_USER)) {
            let user = JSON.parse(localStorage.getItem(LS_USER))
            dispatch(restoreUser(user))
        }
        if (localStorage.hasOwnProperty(LS_CART)) {
            let cart = JSON.parse(localStorage.getItem(LS_CART))
            dispatch(restoreCart(cart))
        }
    }, [])

    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default RootLayout;
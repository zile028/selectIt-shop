import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {LS_CART, LS_TOKEN, LS_USER} from "../config/config";
import {useDispatch} from "react-redux";
import {restoreUser} from "../store/userSlice";
import {restoreCart} from "../store/cartSlice";
import axios from "axios";

axios.interceptors.request.use(config => {
    if (localStorage.hasOwnProperty(LS_TOKEN)) {
        config.headers.Authorization = localStorage.getItem(LS_TOKEN)
    }
    return config
})

function RootLayout() {
    const dispatch = useDispatch();
    const [isFinish, setIsFinish] = useState(false);
    useEffect(() => {
        if (localStorage.hasOwnProperty(LS_USER)) {
            let user = JSON.parse(localStorage.getItem(LS_USER));
            dispatch(restoreUser(user));
        }
        if (localStorage.hasOwnProperty(LS_CART)) {
            let cart = JSON.parse(localStorage.getItem(LS_CART));
            dispatch(restoreCart(cart));
        }
        setIsFinish(true)
    }, []);

    return isFinish && (
        <div>
            <Outlet/>
        </div>
    );
}

export default RootLayout;

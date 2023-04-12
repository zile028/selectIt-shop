import React from 'react';
import {Outlet} from "react-router-dom";
import axios from "axios";
import {LS_KEY} from "../config/config";

axios.interceptors.request.use((config) => {
    if (localStorage.hasOwnProperty(LS_KEY)) {
        config.headers.authorization = localStorage.getItem(LS_KEY)
    }
    return config
})

function RootLayout() {
    return (
        <>
            <Outlet/>
        </>
    );
}

export default RootLayout;
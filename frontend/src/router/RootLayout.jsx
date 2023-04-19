import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {LS_USER} from "../config/config";
import {useDispatch} from "react-redux";
import {restoreUser} from "../store/userSlice";

function RootLayout() {
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.hasOwnProperty(LS_USER)) {
            let user = JSON.parse(localStorage.getItem(LS_USER))
            dispatch(restoreUser(user))
        }
    }, [])

    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default RootLayout;
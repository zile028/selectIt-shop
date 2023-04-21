import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        userStore: userSlice,
        cartStore: cartSlice,

    }
})
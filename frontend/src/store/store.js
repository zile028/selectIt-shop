import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import loaderSlice from "./loaderSlice";
import categorySlice from "./categorySlice";

export const store = configureStore({
    reducer: {
        userStore: userSlice,
        cartStore: cartSlice,
        loaderStore: loaderSlice,
        categoriesStore: categorySlice
    }
})
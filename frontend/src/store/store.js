import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import loaderSlice from "./loaderSlice";

export const store = configureStore({
    reducer: {
        userStore: userSlice,
        loaderStore: loaderSlice
    }
})
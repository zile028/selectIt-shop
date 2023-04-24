import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: "loader",
    initialState: {
        visible: false
    },
    reducers: {
        setVisibleLoader: (state, action) => {
            state.visible = action.payload
        }
    }
})

export const { setVisibleLoader } = loaderSlice.actions
export default loaderSlice.reducer
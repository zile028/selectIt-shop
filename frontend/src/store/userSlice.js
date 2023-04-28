import {createSlice} from "@reduxjs/toolkit";
import {LS_TOKEN, LS_USER} from "../config/config";


const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: {}
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem(LS_USER, JSON.stringify(action.payload))
        },
        restoreUser: (state, action) => {
            state.user = action.payload
        },
        logoutUser: (state, action) => {
            state.user = {}
            localStorage.removeItem(LS_USER)

        }
    }
})

export const {setUser, restoreUser, logoutUser} = UserSlice.actions
export default UserSlice.reducer
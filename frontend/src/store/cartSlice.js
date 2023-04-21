import {createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        totalPrice: 0
    },
    reducers: {

        changeQuantityCart: () => {
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(el => {
                if (el._id === action.payload) {
                    state.totalPrice -= el.price * el.quantity
                }
                return el._id !== action.payload
            })
        },
        addToCart: (state, action) => {
            let product = {...action.payload.product}
            let quantity = action.payload.quantity
            let copyCart = [...state.cart]
            let totalPrice = 0
            let foundIndex = null
            product.quantity = quantity

            state.cart.find((cartProduct, index) => {
                if (cartProduct._id === product._id) {
                    foundIndex = index
                }
                return cartProduct._id === product._id
            })

            if (foundIndex !== null) {
                copyCart[foundIndex].quantity += quantity
                copyCart[foundIndex].total += product.price * quantity
            } else {
                product.total = product.price * quantity
                copyCart.push(product)
            }

            copyCart.forEach(el => {
                totalPrice += el.total
            })
            state.totalPrice = totalPrice
            state.cart = copyCart
        }
    }
})

export const {addToCart, removeFromCart, changeQuantityCart} = CartSlice.actions
export default CartSlice.reducer
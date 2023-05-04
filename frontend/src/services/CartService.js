import axios from "axios";

class CartService {
    static paymentInit = (body) => axios.post("/cart/paymentInit", body)
    static addOrder = (body) => axios.post("/cart/orders/add", body)
    static getAllOrders = (email) => axios.get(`/cart/orders/all/${email}`)
}

export default CartService
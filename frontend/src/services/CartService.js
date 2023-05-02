import axios from "axios";

class CartService {
    static paymentInit = (body) => axios.post("/cart/paymentInit", body)
}

export default CartService
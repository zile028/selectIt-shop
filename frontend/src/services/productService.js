import axios from "axios";

class ProductService {
    static pagination = (limit, page) => axios.get(`/product/${limit}/${page}`)
    static getProductDetails = (id) => axios.post(`/product/${id}`)
}

export default ProductService
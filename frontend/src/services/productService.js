import axios from "axios";

class ProductService {
    static pagination = (limit, page) => axios.get(`/product/${limit}/${page}`)
}

export default ProductService
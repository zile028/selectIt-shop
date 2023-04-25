import axios from "axios";

class ProductService {
    static pagination = (limit, page) => axios.get(`/product/${limit}/${page}`)
    static getProductDetails = (id) => axios.post(`/product/${id}`)
    static categoryPagination = (limit, page, category) => axios.get(`/product/${category}/${limit}/${page}`)
}

export default ProductService
import axios from "axios";

class ProductService {
    static pagination = (limit, page) => axios.get(`/product/${limit}/${page}`)
    static getProductDetails = (id) => axios.get(`/product/${id}`)
    static categoryPagination = (limit, page, category) => axios.get(`/product/${category}/${limit}/${page}`)
    static addProduct = (product) => axios.post('/product/addProduct', product);
    static searchProduct = (search, limit, page) => axios.get(`/product/shop/${search}/${limit}/${page}`)
    static getRandomProducts = (number) => axios.get(`/random/${number}`);
}

export default ProductService
import axios from "axios";

class CategoryServices {
    static getAllCategory = () => axios.get('/category/all')
}

export default CategoryServices;
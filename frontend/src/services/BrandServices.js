import axios from "axios";

class BrandServices{
    static getAllBrand = () => axios.get('/brand/all');
}

export default BrandServices;
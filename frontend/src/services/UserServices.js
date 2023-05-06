import axios from "axios";

class UserServices {
    static register = (body) => axios.post("/user/register", body);
    static getUser = (body) => axios.post("/user", body);

    static login = (body) => axios.post("/user/login", body);
    static activateAccount = (id) => axios.put("/user/activate/" + id)
    static addToFavorite = (body) => axios.put("/user/addToFavorite", body);
    static removeFromFavorite = (body) =>
        axios.put("/user/removeFromFavorite", body);
}

export default UserServices;

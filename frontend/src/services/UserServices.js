import axios from "axios";

class UserServices {

    static register = (body) => axios.post("/user/register", body)
    static getUser = (body) => axios.post("/user", body)
    static sendMessage = (body) => axios.post("/...", body)

}

export default UserServices
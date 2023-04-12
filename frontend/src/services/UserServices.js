import axios from "axios";

class UserServices {

    static register = (body) => axios.post("/user/register", body)
    static getUser = (body) => axios.post("/user", body)
    static contactMessage = (body) => axios.post("/contact", body)

}

export default UserServices
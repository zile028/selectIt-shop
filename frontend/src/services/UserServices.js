import axios from "axios";

class UserServices {

    static register = (body) => axios.post("/user/register", body)
    static getUser = (body) => axios.post("/user", body)
   

}

export default UserServices
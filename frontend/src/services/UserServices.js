import axios from "axios";

class UserServices {

    static getUser = (body) => axios.post("/user",body)

}

export default UserServices
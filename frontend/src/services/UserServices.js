import axios from "axios";

class UserServices {

    static register = (body) => axios.post("/user/register", body)
    static getUser = (email) => axios.get("/user/" + email)
    static activateAccount = (id) => axios.put("/user/activate/" + id)
    static login = (body) => axios.post("/user/login", body)

}


export default UserServices
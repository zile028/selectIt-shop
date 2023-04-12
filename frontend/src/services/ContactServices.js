import axios from "axios";

class ContactServices {

    static contactMessage = (body) => axios.post("/contact", body)

}

export default ContactServices;
import axios from "axios";

class SubService {
  static subscribe = (body) => axios.post("/subscriber/subscriber", body);
}

export default SubService;

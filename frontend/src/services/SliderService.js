import axios from "axios";
class SliderService {
  static getSliderData = () => axios.get("/slider");
}
export default SliderService;

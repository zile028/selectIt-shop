const SliderModel = require("../../model/SliderModel");
const getSlider = (req, res) => {
  SliderModel.find({})
    .then((slider) => {
      res.send(slider);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = getSlider;

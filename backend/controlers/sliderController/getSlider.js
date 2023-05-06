const SliderModel = require("../../model/sliderModel");
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

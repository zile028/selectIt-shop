const SliderModel = require("../../model/sliderModel");

const setSlider = (req, res) => {
    SliderModel.deleteMany({})
        .then(() => {
            SliderModel.insertMany(req.body)
                .then((result) => {
                    res.status(201).send("Slider successfully updated");
                })
                .catch((err) => {
                    res.status(417).send(err);
                });
        })
        .catch((err) => {
            res.status(417).send(err);
        });
};
module.exports = setSlider;

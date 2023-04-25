const SliderModel = require("../../model/SliderModel");
const setSlider = (req, res) => {
  SliderModel.deleteMany({})
    .then(() => {
      SliderModel.insertMany(req.body)
        .then((res) => {
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

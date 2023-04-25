const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema({
  header: { type: String, required: true },
  text: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonLink: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const SliderModel = mongoose.model("sliders", SliderSchema);
module.exports = SliderModel;

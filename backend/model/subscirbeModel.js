const mongoose = require("mongoose");

const SubScribeSchema = new mongoose.Schema({
  email: { type: String, required: true },
  createdAt: { type: Date, default: () => new Date().getTime() },
});

const SubscribeModel = mongoose.model("subscribers", SubScribeSchema);
module.exports = SubscribeModel;

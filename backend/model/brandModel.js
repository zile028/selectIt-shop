const mongoose = require("mongoose")

const BrandSchema = new mongoose.Schema({
    name: {type: String, required: true},
})

const BrandModel = mongoose.model("brands", BrandSchema)
module.exports = BrandModel
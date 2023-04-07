//server
const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const dbUrl = require("./config/configDb")

app.use(cors())
mongoose.connect(dbUrl)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", require("./routes"))

app.listen(4000, () => {
    console.log("Server running...")
})
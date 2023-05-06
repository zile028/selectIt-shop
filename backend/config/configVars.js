require("dotenv").config()

module.exports = {
    privateKey: "slit123",
    FE_URL: process.env.NODE_ENV === "production" ? "https://select-it-shop-fe.vercel.app/" : "http://localhost:3000/"
}
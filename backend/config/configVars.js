require("dotenv").config()
const {JWT_KEY} = process.env

module.exports = {
    privateKey: JWT_KEY,
    FE_URL: process.env.NODE_ENV === "production" ? "https://select-it-shop-fe.vercel.app/" : "http://localhost:3000/"
}
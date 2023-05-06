require("dotenv").config()
const {DB_USERNAME, DB_PASSWORD} = process.env
const dbUrl = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@selectit.xivh3hh.mongodb.net/?retryWrites=true&w=majority`
console.log(process.env.JWT_KEY)
module.exports = dbUrl
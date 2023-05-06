require("dotenv").config()
const {DB_USERNAME, DB_PASSWORD} = process.env
const dbUrl = `mongodb+srv://zdejan028:HEYPa6fCCdWA8S60@selectit.xivh3hh.mongodb.net/?retryWrites=true&w=majority`
module.exports = dbUrl
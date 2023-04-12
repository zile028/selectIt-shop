
const mongoose = require("mongoose")

const ContactMessageSchema = mongoose.Schema({

     name: {type:String, required: true},
     email: {type:String, required: true},
     subject: {type:String, required: true},
     message: {type:String, required: true},
     createdAt: {type: Date, default: () => new Date().getTime()}

})

const ContactMessage = mongoose.modal("ContactMessage", ContactMessageSchema)
model.exports = ContactMessage
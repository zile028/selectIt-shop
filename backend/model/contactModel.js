const mongoose = require("mongoose")

const ContactMessageSchema = new mongoose.Schema({

    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
    isMessageRead: {type: Boolean, default: false, required: true},
    createdAt: {type: Date, default: () => new Date().getTime()}

})

const ContactModel = mongoose.model("ContactMessage", ContactMessageSchema)
module.exports = ContactModel
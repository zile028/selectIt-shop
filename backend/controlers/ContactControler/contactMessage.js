const ContactModel = require('../../model/contactModel');

const contactMessage = (req, res) => {
    const {name, email, subject, message} = req.body

    const contactMessage = {
        name,
        email,
        subject,
        message,
    }

    const newMessage = new ContactModel(contactMessage)

    newMessage.save().then((savedMessage) => {
        console.log(savedMessage)
    }).catch((error) => {
        console.log(error)
    })
    //TODO send response if ok and if have error
    res.send("OK")
}

module.exports = contactMessage
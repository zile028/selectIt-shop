const ContactModal = require('../contact/contactMessage')

const contactMessage = (req, res) => {
    const { name, email, subject, message } = req.body
   
    const contactMessage = {
        name,
        email,
        subject,
        message,
    }

    const newMessage = new ContactModal(contactMessage)

    newMessage.save().then((savedMessage) => {
        console.log(savedMessage)
    }).catch((error) => {
        console.log(error)
    })

    res.send("OK")
}

module.exports = contactMessage
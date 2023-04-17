const nodemailer = require("nodemailer");
const {activationMailTemplate} = require("../mailTemplate/mailTemplate");
const {
    welcomeSubscribeMailTemplate,
} = require("../mailTemplate/subMailTemplate");
const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    // port: 587,
    // secure: false,
    service: "gmail",
    auth: {
        user: "shopselectit@gmail.com",
        pass: "qcefsyorjyiwwewm",
    },
});
const sendActivateLink = (email, verifyLink) => {
    let message = {
        from: "SELECTIT-SHOP <shopselectit@gmail.com>",
        to: email,
        subject: "Activate account",
        html: activationMailTemplate(verifyLink),
    };
    return transporter.sendMail(message);
};
//This is mail service for successfully subscribed user on SELECTIT-SHOP
const sendSuccessSubMail = (email, verifyLink) => {
    let message = {
        from: "SELECTIT-SHOP <shopselectit@gmail.com>",
        to: email,
        subject: "Success Subscription",
        html: welcomeSubscribeMailTemplate(verifyLink),
    };
    return transporter.sendMail(message);
};

const resetPassword = () => {
};

module.exports = {sendActivateLink, resetPassword, sendSuccessSubMail};

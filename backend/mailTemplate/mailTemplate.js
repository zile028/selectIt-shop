const activationMailTemplate = (verifyLink) => {
    return `<p>Activate account by click on link:</p>
    <a href="${verifyLink}">Clicke on this</a>`

}

module.exports = {activationMailTemplate}
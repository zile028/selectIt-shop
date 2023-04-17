const welcomeSubscribeMailTemplate = (verifyLink) => {
  return `<h1>You have successfully subscribed to to SELECTIT-SHOP</h1>
    <a href="${verifyLink}">Back to your homepage</a>`;
};

module.exports = { welcomeSubscribeMailTemplate };

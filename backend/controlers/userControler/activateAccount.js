const UserModel = require("../../model/userModel");

const activateAccount = (req, res) => {

    UserModel.updateOne({_id: req.params.id}, {isActivated: true})
        .then((value) => {
            console.log(value)
            res.send(value)
        })
        .catch((error) => {
            res.status(415).send(error)
        })
}

module.exports = activateAccount
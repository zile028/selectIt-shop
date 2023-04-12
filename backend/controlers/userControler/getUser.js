const UserModel = require("../../model/userModel");

const getUser = (req, res) => {
    UserModel.findOne({email: req.params.email})
        .then((users) => {
            res.send(users)
        })
        .catch((error) => {
            res.send(error)
        })
}

module.exports = getUser
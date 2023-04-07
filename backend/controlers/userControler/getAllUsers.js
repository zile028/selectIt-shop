const UserModel = require("../../model/userModel")

const getAllUsers = (req, res) => {
    UserModel.find({})
        .then((users) => {
            res.send(users)
        })
        .catch((error) => {
            res.send(error)
        })
}

module.exports = getAllUsers
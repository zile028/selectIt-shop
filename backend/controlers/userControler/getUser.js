const UserModel = require("../../model/userModel");

const getUser = (req, res) => {
    UserModel.findOne({firstName: req.params.firstName})
        .then((users) => {
            res.send(users)
        })
        .catch((error) => {
            res.send(error)
        })
}

module.exports = getUser
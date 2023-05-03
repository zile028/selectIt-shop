const UserModel = require("../../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {privateKey} = require("../../config/configVars");

const login = (req, res) => {
    const {email, password} = req.body
    UserModel.findOne({email}, null, {lean: true})
        .then((user) => {
            if (user && user.isActivated) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.status(415).send(err)
                    } else if (result) {
                        //user logovan
                        delete (user.password)
                        jwt.sign({
                            id: user._id,
                            isAdmin: user.isAdmin
                        }, privateKey, {algorithm: 'HS256'}, (err, token) => {
                            console.log(token)
                            res.send({user, token})
                        })
                    } else {
                        res.status(201).send({msg: "Your email and password not match."})
                    }
                })
            } else if (user && !user.isActivated) {
                res.status(201).send({msg: "Your account not activated."})
            } else {
                res.status(201).send({msg: "User not exists."})
            }
        })
        .catch((error) => {
            res.status(415).send(error)
        })
}

module.exports = login
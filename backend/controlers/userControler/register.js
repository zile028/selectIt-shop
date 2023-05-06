const UserModel = require("../../model/userModel")
const bcrypt = require("bcrypt")
const {sendActivateLink} = require("../../services/sendMail");
const {FE_URL} = require("../../config/configVars");
const saltRound = 10

const register = async (req, res) => {
    /*
    * Dobili smo podatke
    * Provera da li vec postoji user sa email adresom u bazi
    * Ako postoji vratiti poruku da user vec postoji sa unetom email adresom
    * Enkripcija pasvorda
    * Sacuvati u bazi
    * Poslati na E-mail verifikacioni link
    * http://localhost:3000/user/activate/fddsfsdf4f564sdfsd
    * */

    const {email, password} = req.body
    const reqBody = req.body

    let isExist = await UserModel.count({email})
    if (isExist > 0) {
        //user exist
        res.status(201).send({msg: "User exist with this email."})
    } else {
        //user not exist
        let paswordHash = await bcrypt.hash(password, saltRound)

        let newUser = new UserModel({...reqBody, password: paswordHash})
        newUser.save()
            .then(user => {
                let verifyLink = FE_URL + "activate/" + user._id
                sendActivateLink(email, verifyLink)
                    .then((data) => {
                        res.send({msg: "Register"})
                    })
                    .catch((error) => {
                        res.status(201).send({msg: "Something went wrong with sending activation link."})
                    })
            })
            .catch((err) => {
                res.status(415).send(err)
            })
    }
}

module.exports = register
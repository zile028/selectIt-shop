const UserModel = require("../../model/userModel");

const addUser = (req, res) => {
   
    let user = {
        firstName: "Marko",
        lastName: "Petrovic",
        email: "marko@mail.com",
        password: "12345",
    }

    let newUser = new UserModel(user)

    newUser.save()
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
    res.send("OK")
}

module.exports = addUser
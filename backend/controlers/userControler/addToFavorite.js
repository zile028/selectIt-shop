const UserModel = require("../../model/userModel");
const addToFavorite = (req, res) => {
    const {productId, userId} = req.body

    UserModel.findOneAndUpdate({_id: userId},
        {
            $push: {favorites: productId}
        },
        {new: true, projection: {password: 0}}
    )
        .then((user) => {
            res.send(user)
        })
        .catch((err) => {
            res.status(415).send(err)
        })

}

module.exports = addToFavorite
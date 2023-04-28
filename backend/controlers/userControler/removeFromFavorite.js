const UserModel = require("../../model/userModel");
const removeFromFavorite = (req, res) => {
  const { productId, userId } = req.body;

  UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $pull: { favorites: productId },
    },
    { new: true, projection: { password: 0 } }
  )
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(415).send(err);
    });
};

module.exports = removeFromFavorite;

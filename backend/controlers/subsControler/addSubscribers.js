const SubscribeModel = require("../../model/subscirbeModel");
const UserModel = require("../../model/userModel");
const {sendSuccessSubMail} = require("../../services/sendMail");
const {FE_URL} = require("../../config/configVars");

const addNewSub = async (req, res) => {
    //   let newSub = new SubscribeModel(sub);
    const {email} = req.body;
    const reqBody = req.body;

    let isExist = await UserModel.count({email});
    let isExistSub = await SubscribeModel.count({email});
    if (isExist || isExistSub > 0) {
        //if user with that mail exist
        res
            .status(201)
            .send({msg: "User with this mail is allready subscribed."});
    } else {
        //If user with this mail does not exist
        let newSub = new SubscribeModel({...reqBody, email});
        newSub
            .save()
            .then((sub) => {
                sendSuccessSubMail(email, FE_URL)
                    .then((data) => {
                        res.send({
                            msg: "You are successsfully subscribed, check your email.",
                        });
                    })
                    .catch((error) => {
                        res.status(201).send({
                            msg: "Something went wrong with sending Sub message.",
                        });
                    });
            })
            .catch((err) => {
                res.status(415).send(err);
            });
    }
};

module.exports = addNewSub;

// const addNewSub = (req, res) => {
//   console.log(req.body);
//   if (req.email) {
//     res.send("OK YOO");
//   } else {
//     res.status(315).send("email is required");
//   }
// };

// module.exports = addNewSub;

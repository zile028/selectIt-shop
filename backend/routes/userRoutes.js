const express = require("express");
const isValidId = require("../middelware/IsValidId");
const {verifyToken} = require("../middelware/authToken");
const router = express.Router();


/***** GET *****/
router.get("/addUser", require("../controlers/userControler/addUser"));
router.get("/allUsers", require("../controlers/userControler/getAllUsers"));
router.get(
    "/:email",
    verifyToken,
    require("../controlers/userControler/getUser")
);
router.get("/:firstName", require("../controlers/userControler/getUser"));

/***** POST *****/
router.post("/register", require("../controlers/userControler/register"));
router.post("/login", require("../controlers/userControler/login"));

/***** PUT *****/
router.put(
    "/activate/:id",
    require("../controlers/userControler/activateAccount")
);
router.put(
    "/addToFavorite",
    require("../controlers/userControler/addToFavorite")
);
router.put(
    "/removeFromFavorite",
    require("../controlers/userControler/removeFromFavorite")
);

module.exports = router;

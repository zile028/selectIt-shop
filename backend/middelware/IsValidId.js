const {isValidObjectId} = require("mongoose");
const httpCode = require("../config/httpStatusCode");

function isValidId(req, res, next) {
    if (isValidObjectId(req.params.id)) {
        next()
    } else {
        res.status(httpCode.INCORRECT_DATA.code)
            .send(httpCode.INCORRECT_DATA.send)
    }
}

module.exports = isValidId
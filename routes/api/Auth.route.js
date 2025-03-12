const router = require("express").Router();

const login = require("../../controllers/auth/registration");


router.post("/registration", login);


module.exports = router;

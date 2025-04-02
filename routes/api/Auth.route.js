const router = require("express").Router();

const login = require("../../controllers/auth/login");
const register = require("../../controllers/auth/registration");
const google = require("../../controllers/auth/google");


router.post("/login", login);
router.post("/registration", register);
// router.post("/google", google);

module.exports = router;

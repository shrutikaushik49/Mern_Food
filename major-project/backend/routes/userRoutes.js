const express = require('express');
const router = express.Router();
const {getUser}=require("../controllers/UserController");
const {getSignUpUser}=require("../controllers/SignupCotroller");
const {getLoginUser} = require("../controllers/loginController");



router.get("/User",getUser);
router.post("/signUp",getSignUpUser);
router.post("/loginIn",getLoginUser);

module.exports= router;
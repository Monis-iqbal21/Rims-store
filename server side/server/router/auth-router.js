const express = require("express");
const router = express.Router();

const authcontroller = require("../controller/auth-controller")
const signupSchema = require("../validator/auth-validator")
const loginSchema = require("../validator/auth-validator")
const schema = require("../validator/auth-validator")
const validate = require("../validator middleware/validator-middleware")
const authMiddleware = require("../validator middleware/auth-middleware")

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(schema.signupSchema),authcontroller.register);
router.route("/register").get(authcontroller.register);
router.route("/login").post(authcontroller.login);
router.route("/login").post(validate(schema.loginSchema),authcontroller.login);

router.route("/user").get(authMiddleware, authcontroller.user);

module.exports = router;
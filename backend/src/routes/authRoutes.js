const express = require("express");
const router = express.Router();
const upload = require('../middlewares/multer.js')
const AuthController = require("../controllers/authController.js");

router.post("/login", AuthController.login);
router.post("/register",upload.single('profileImg'), AuthController.register);

module.exports = router;
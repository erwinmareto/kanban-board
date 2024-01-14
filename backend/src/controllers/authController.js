const cloudinary = require("cloudinary").v2;
const AuthService = require("../services/authService.js");

class AuthController {
  static register = async (req, res, next) => {
    try {
    //     console.log(req.file.path);
    //   const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
    //     resource_type: "image",
    //   });
    console.log(req.body, "req.body");
      const user = await AuthService.register(req.body);
      return res.status(201).json({ message: "User registered", data: user });
    } catch (error) {
      next(error);
    }
  };

  static login = async (req, res, next) => {
    try {
      const user = await AuthService.login(req.body);
      return res
        .status(200)
        .json({ message: "Successfully logged in user", data: user });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;

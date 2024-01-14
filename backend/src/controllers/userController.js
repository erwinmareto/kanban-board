const cloudinary = require("cloudinary").v2;
const UserService = require("../services/userService");

class UserController {
  static getAllUsers = async (req, res, next) => {
    try {
      const users = await UserService.getAll();
      return res
        .status(200)
        .json({ message: "Successfully retrieved users data", data: users });
    } catch (error) {
      next(error);
    }
  };

  static getUserById = async (req, res, next) => {
    try {
      const user = await UserService.getById(req.params.id);
      return res
        .status(200)
        .json({ message: "Successfully retrieved user data", data: user });
    } catch (error) {
      next(error);
    }
  };

  static addUser = async (req, res, next) => {
    try {
      const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
      });
      const user = await UserService.add({ ...req.body, image: secure_url });
      return res
        .status(201)
        .json({ message: "Successfully created user", data: user });
    } catch (error) {
      next(error);
    }
  };

  static updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await UserService.update(id, req.body);
      return res
        .status(200)
        .json({ message: "Successfully updated user", data: user });
    } catch (error) {
      next(error);
    }
  };

  static deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await UserService.delete(id);
      return res
        .status(200)
        .json({ message: "Successfully deleted user", data: user });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserController;

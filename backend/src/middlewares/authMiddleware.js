const { verifyToken } = require("../lib/jwt");
const UserService = require("../services/userService");

const authenticate = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw { name: "Unautheticated" };
    }
    const accessToken = req.headers.authorization.split(" ")[1];
    const { id } = verifyToken(accessToken);
    const user = await UserService.getUserById(id);
    if (!user) {
      throw { name: "Unauthenticated" };
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const authorize = async (req, res, next) => {
    try {
        const {username} = req.user
        if (!username) {
            throw { name: "Unauthorized" };
        }
        next();
    } catch (error) {
        next(error)
    }
}

module.exports = { authenticate, authorize };

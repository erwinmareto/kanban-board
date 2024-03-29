const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const { generateToken } = require("../lib/jwt");

const prisma = new PrismaClient();

class AuthService {
  static register = async ({ username, password }) => {
    const alreadyExists = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (alreadyExists) {
      console.log(username, "<<<<<<<<<<<");
      throw { name: "UniqueName" };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });
    return user;
  };

  static login = async ({ username, password }) => {
    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (!user) {
      throw { name: "InvalidCred" };
    }
    const isPasswordMatched = bcrypt.compareSync(password, user.password);
    if (!isPasswordMatched) {
      throw { name: "InvalidCred" };
    }

    const userData = {
      id: user.id,
      username: user.username,
    };
    const accessToken = generateToken(userData);
    return { accessToken, ...userData };
  };
}

module.exports = AuthService;
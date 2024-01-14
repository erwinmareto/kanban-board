const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

class UserService {
    static getAll = async () => {
        const users = await prisma.user.findMany();
        return users;
    }

    static getById = async (id) => {
        const user = await prisma.user.findFirst({
            where: {
                id: parseInt(id)
            }
        });
        return user;
    }

    static add = async ({ username, password }) => {
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = await prisma.user.create({
          data: {
            username: username,
            password: hashedPassword,
            // profileImg: profileImg
          },
        });
        if (!user) {
          throw { name: "NotFound" };
        }
        return user;
      };
    
    
      static update = async (id, { username, password }) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.update({
          where: { id: parseInt(id) },
          data: {
            username: username,
            password: hashedPassword,
            // profileImg: profileImg
          },
        });
        if (!user) {
          throw { name: "NotFound" };
        }
        return user;
      };
    
      static delete = async (id) => {
        const user = await prisma.user.delete({
          where: { id: parseInt(id) },
        });
        if (!user) {
          throw { name: "NotFound" };
        }
        return user;
      };
}

module.exports = UserService
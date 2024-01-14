const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

class TaskService {
  static getAll = async () => {
    const tasks = await prisma.task.findMany();
    return tasks;
  };

  static getById = async (id) => {
    const task = await prisma.task.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    return task;
  };

  static add = async ({ userId, cardId, title, category, deadline }) => {
    const task = await prisma.task.create({
      data: {
        userId: parseInt(userId),
        cardId: parseInt(cardId),
        title: title,
        category: category,
        deadline: new Date(deadline),
      },
    });
    if (!task) {
      throw { name: "NotFound" };
    }
    return task;
  };

  static update = async (id, { userId, cardId, title, category, deadline }) => {
    const task = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        userId: parseInt(userId),
        cardId: parseInt(cardId),
        title: title,
        category: category,
        deadline: new Date(deadline),
      },
    });
    if (!task) {
      throw { name: "NotFound" };
    }
    return task;
  };

  static delete = async (id) => {
    const task = await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    if (!task) {
      throw { name: "NotFound" };
    }
    return task;
  };
}

module.exports = TaskService;

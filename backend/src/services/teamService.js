const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class TeamService {
  static getAll = async () => {
    const teams = await prisma.team.findMany();
    return teams;
  };

  static getById = async (id) => {
    const team = await prisma.team.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    return team;
  };

  static getByUserId = async (id) => {
    const team = await prisma.team.findMany({
      where: {
        userId: parseInt(id),
      },
    });
    return team;
  }

  static getEverything = async () => {
    const teams = await prisma.team.findMany({
      include: {
        Card: {
          include: {
            Task: true,
          },
        },
      },
    });
    return teams;
  };

  static getEverythingById = async (id) => {
    const teams = await prisma.team.findMany({
      where: {
        id: parseInt(id),
      },
      include: {
        Card: {
          include: {
            Task: true,
          },
        },
      },
    });
    return teams;
  };

  static getEverythingByUserId = async (id) => {
    const teams = await prisma.team.findMany({
      where: {
        userId: parseInt(id),
      },
      include: {
        Card: {
          include: {
            Task: true,
          },
        },
      },
    });
    return teams;
  }

  static add = async ({ userId, name }) => {
    const team = await prisma.team.create({
      data: {
        userId: parseInt(userId),
        name: name,
      },
    });
    if (!team) {
      throw { name: "NotFound" };
    }
    return team;
  };

  static update = async (id, { name, userId }) => {
    const team = await prisma.team.update({
      where: { id: parseInt(id) },
      data: {
        userId: parseInt(userId),
        name: name,
      },
    });
    if (!team) {
      throw { name: "NotFound" };
    }
    return team;
  };

  static delete = async (id) => {
    const team = await prisma.team.delete({
      where: { id: parseInt(id) },
    });
    if (!team) {
      throw { name: "NotFound" };
    }
    return team;
  };
}

module.exports = TeamService;

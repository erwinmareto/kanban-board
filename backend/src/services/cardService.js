const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class CardService {
  static getAll = async () => {
    const cards = await prisma.card.findMany();
    return cards;
  };

  static getCard = async (id) => {
    const card = await prisma.card.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    return card;
  };

  static getEverything = async () => {
    const cards = await prisma.card.findMany({
      include: {
        Task: true,
      }
    })
    return cards
  }

  static getEverythingByTeamId = async (id) => {
    const cards = await prisma.card.findFirst({
      where: {
        teamId: parseInt(id),
      },
      include: {
        Task: true,
      }
    })
    return cards
  }

  static getEverythingByTeamName = async (teamName) => {
    const cards = await prisma.card.findMany({
      where: {
        team: {
          name: teamName
        }
      },
      include: {
        Task: true,
      }
    })
    return cards
  }

  static add = async ({ teamId, title }) => {
    const card = await prisma.card.create({
      data: {
        teamId: parseInt(teamId),
        title: title,
      },
    });
    if (!card) {
      throw { name: "NotFound" };
    }
    return card;
  };

  static update = async (id, { title, teamId }) => {
    const card = await prisma.card.update({
      where: { id: parseInt(id) },
      data: {
        teamId: parseInt(teamId),
        title: title
      },
    });
    if (!card) {
      throw { name: "NotFound" };
    }
    return card;
  };

  static delete = async (id) => {
    const card = await prisma.card.delete({
      where: { id: parseInt(id) },
    });
    if (!card) {
      throw { name: "NotFound" };
    }
    return card;
  };
}

module.exports = CardService;

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class MemberService {
  static getAll = async () => {
    const members = await prisma.teamMembers.findMany();
    return members;
  };

  static getById = async (id) => {
    const member = await prisma.teamMembers.findFirst({
      where: {
        id: +id,
      },
    });
    return member;
  };

  static getByTeamId = async (teamId) => {
    const members = await prisma.teamMembers.findMany({
      where: {
        teamId: +teamId,
      },
    });
    return members;
  };

  static getByUserId = async (userId) => {
    const teams = await prisma.teamMembers.findMany({
      where: {
        userId: +userId,
      },
    });
    return teams;
  };

  static add = async ({ users }) => {
    const allMembers = await Promise.all(
      users.map(async (user) => {
        return await prisma.teamMembers.create({
          data: {
            teamId: +user.teamId,
            userId: +user.userId,
          },
        });
      })
    );
    // const newMember = await prisma.teamMembers.create({
    //   data: {
    //     teamId: +teamId,
    //     userId: +userId,
    //   },
    // });
    return allMembers;
  };

  static update = async (id, teamId, userId) => {
    const team = await prisma.teamMembers.update({
      where: { id: +id },
      data: {
        teamId: +teamId,
        userId: +userId,
      },
    });
    if (!team) {
      throw { name: "NotFound" };
    }
    return team;
  };

  static delete = async (id) => {
    const member = await prisma.teamMembers.delete({
      where: { id: +id },
    });
    if (!member) {
      throw { name: "NotFound" };
    }
    return member;
  };
}

module.exports = MemberService;

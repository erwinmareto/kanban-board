const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      username: "john_doe",
      password: "password123",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "jane_smith",
      password: "securepassword",
    },
  });

  console.log("Users seeded:", user1, user2);

  // Seed Teams
  const team1 = await prisma.team.create({
    data: {
      userId: user1.id,
      name: "Team 1",
      Card: {
        create: {
          title: "Sample Card 1",
          Task: {
            createMany: {
              data: [
                {
                  userId: 2,
                  title: "Task 2",
                  category: "MINOR",
                  deadline: new Date("2022-12-31T23:59:59"),
                },
                {
                  userId: 1,
                  title: "Task 69",
                  category: "MODERATE",
                  deadline: new Date("2022-12-31T23:59:59"),
                },
              ],
            },
          },
        },
      },
    },
  });

  const team2 = await prisma.team.create({
    data: {
      userId: user2.id,
      name: "Team 2",
      Card: {
        create: {
          title: "Sample Card 2",
          Task: {
            createMany: {
              data: [
                {
                  userId: 1,
                  title: "Task 4",
                  category: "MODERATE",
                  deadline: new Date("2023-01-15T18:00:00"),
                },
                {
                  userId: 2,
                  title: "Task 22",
                  category: "MINOR",
                  deadline: new Date("2023-01-15T18:00:00"),
                },
              ],
            },
          },
        },
      },
    },
  });

  const member1 = await prisma.teamMembers.create({
    data: {
      userId: 1,
      teamId: 1,
    },
  });

  const member2 = await prisma.teamMembers.create({
    data: {
      userId: 2,
      teamId: 2,
    },
  });

  console.log("Teams seeded:", team1, team2);
  console.log("Members seeded:", member1, member2);

  // Close the Prisma client
  await prisma.$disconnect();
}

// Run the seeding script
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    // Ensure that the Prisma client is disconnected
    await prisma.$disconnect();
  });

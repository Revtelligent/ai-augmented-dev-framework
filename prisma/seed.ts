import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create initial challenges for MindBreak
  const challenges = [
    {
      name: "Pattern Memory - Easy",
      difficulty_level: "easy",
      estimated_duration_minutes: 3,
      sort_order: 1,
      metadata: JSON.stringify({
        gridSize: 9,
        patternLength: 3,
        revealTime: 2000,
        maxAttempts: 3,
      }),
    },
    {
      name: "Pattern Memory - Medium",
      difficulty_level: "medium",
      estimated_duration_minutes: 4,
      sort_order: 2,
      metadata: JSON.stringify({
        gridSize: 16,
        patternLength: 5,
        revealTime: 1500,
        maxAttempts: 2,
      }),
    },
    {
      name: "Pattern Memory - Hard",
      difficulty_level: "hard",
      estimated_duration_minutes: 5,
      sort_order: 3,
      metadata: JSON.stringify({
        gridSize: 25,
        patternLength: 7,
        revealTime: 1000,
        maxAttempts: 1,
      }),
    },
  ];

  for (const challenge of challenges) {
    // Check if challenge exists by name first
    const existingChallenge = await prisma.challenge.findFirst({
      where: { name: challenge.name },
    });

    if (!existingChallenge) {
      await prisma.challenge.create({
        data: challenge,
      });
    }
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

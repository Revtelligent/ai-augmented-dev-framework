import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const challenges = await prisma.challenge.findMany({
      where: { is_active: true },
      orderBy: { sort_order: "asc" },
      select: {
        id: true,
        name: true,
        difficulty_level: true,
        estimated_duration_minutes: true,
        metadata: true,
        sort_order: true,
      },
    });

    // Parse metadata JSON for each challenge
    const challengesWithMetadata = challenges.map((challenge) => ({
      ...challenge,
      metadata: JSON.parse(challenge.metadata),
    }));

    return NextResponse.json({
      challenges: challengesWithMetadata,
      count: challenges.length,
    });
  } catch (error) {
    console.error("Error fetching challenges:", error);
    return NextResponse.json(
      { error: "Failed to fetch challenges" },
      { status: 500 }
    );
  }
}

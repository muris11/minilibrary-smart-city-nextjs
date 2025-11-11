import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET /api/admin/team - Get all team members
export async function GET() {
  try {
    const teamMembers = await prisma.teamMember.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });

    return NextResponse.json(teamMembers);
  } catch (error) {
    console.error("Error fetching team members:", error);
    return NextResponse.json(
      { error: "Failed to fetch team members" },
      { status: 500 }
    );
  }
}

// POST /api/admin/team - Create new team member
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, role, bio, avatar, email, order } = body;

    const teamMember = await prisma.teamMember.create({
      data: {
        name,
        role,
        bio,
        avatar,
        email,
        order: order || 0,
      },
    });

    return NextResponse.json(teamMember);
  } catch (error) {
    console.error("Error creating team member:", error);
    return NextResponse.json(
      { error: "Failed to create team member" },
      { status: 500 }
    );
  }
}

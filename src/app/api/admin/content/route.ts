import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET /api/admin/content - Get all content pages
export async function GET() {
  try {
    const contentPages = await prisma.contentPage.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(contentPages);
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      { error: "Failed to fetch content" },
      { status: 500 }
    );
  }
}

// POST /api/admin/content - Create new content page
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, title, content, metadata } = body;

    const contentPage = await prisma.contentPage.create({
      data: {
        slug,
        title,
        content,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    });

    return NextResponse.json(contentPage);
  } catch (error) {
    console.error("Error creating content:", error);
    return NextResponse.json(
      { error: "Failed to create content" },
      { status: 500 }
    );
  }
}

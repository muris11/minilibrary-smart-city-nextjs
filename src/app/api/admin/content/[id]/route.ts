import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

// GET /api/admin/content/[id] - Get specific content page
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const contentPage = await prisma.contentPage.findUnique({
      where: { id },
    });

    if (!contentPage) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    return NextResponse.json(contentPage);
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      { error: "Failed to fetch content" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/content/[id] - Update content page
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { slug, title, content, metadata, isActive } = body;

    const contentPage = await prisma.contentPage.update({
      where: { id },
      data: {
        slug,
        title,
        content,
        metadata: metadata ? JSON.stringify(metadata) : null,
        isActive,
      },
    });

    return NextResponse.json(contentPage);
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/content/[id] - Delete content page
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    await prisma.contentPage.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Content deleted successfully" });
  } catch (error) {
    console.error("Error deleting content:", error);
    return NextResponse.json(
      { error: "Failed to delete content" },
      { status: 500 }
    );
  }
}

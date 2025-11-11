import { authenticateRequest } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// GET /api/admin/content - Get all content pages
export async function GET(request: NextRequest) {
  console.log('🔐 CONTENT API: GET request received');
  try {
    // Check authentication
    console.log('🔍 CONTENT API: Checking authentication...');
    const user = await authenticateRequest(request);
    if (!user || user.role !== "ADMIN") {
      console.error('❌ CONTENT API: Authentication failed - user:', user);
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      );
    }

    console.log('✅ CONTENT API: Authentication successful for user:', user.email);
    console.log('📊 CONTENT API: Fetching content pages from database...');

    const contentPages = await prisma.contentPage.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });

    console.log('✅ CONTENT API: Successfully fetched', contentPages.length, 'content pages');

    return NextResponse.json(contentPages, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });
  } catch (error) {
    console.error('❌ CONTENT API: Error fetching content:', error);
    return NextResponse.json(
      { error: "Failed to fetch content" },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );
  }
}

// POST /api/admin/content - Create new content page
export async function POST(request: NextRequest) {
  console.log('🔐 CONTENT API: POST request received');
  try {
    // Check authentication
    console.log('🔍 CONTENT API: Checking authentication...');
    const user = await authenticateRequest(request);
    if (!user || user.role !== "ADMIN") {
      console.error('❌ CONTENT API: Authentication failed - user:', user);
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      );
    }

    console.log('✅ CONTENT API: Authentication successful for user:', user.email);
    console.log('📝 CONTENT API: Parsing request body...');

    const body = await request.json();
    const { slug, title, content, metadata } = body;

    console.log('📋 CONTENT API: Creating content page:', { slug, title, hasContent: !!content, hasMetadata: !!metadata });

    const contentPage = await prisma.contentPage.create({
      data: {
        slug,
        title,
        content,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    });

    console.log('✅ CONTENT API: Content page created successfully with ID:', contentPage.id);

    return NextResponse.json(contentPage, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });
  } catch (error) {
    console.error('❌ CONTENT API: Error creating content:', error);
    return NextResponse.json(
      { error: "Failed to create content" },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );
  }
}

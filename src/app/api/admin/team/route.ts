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

// GET /api/admin/team - Get all team members
export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const user = await authenticateRequest(request);
    if (!user || user.role !== "ADMIN") {
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

    console.log('✅ TEAM API: Authentication successful for user:', user.email);
    console.log('📊 TEAM API: Fetching team members from database...');

    try {
      const teamMembers = await prisma.teamMember.findMany({
        where: { isActive: true },
        orderBy: { order: "asc" },
      });

      console.log('✅ TEAM API: Successfully fetched', teamMembers.length, 'team members');

      return NextResponse.json(teamMembers, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      });
    } catch (dbError) {
      console.error('❌ TEAM API: Database error:', dbError);
      return NextResponse.json(
        { error: "Database connection failed. Please check DATABASE_URL configuration." },
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
  } catch (error) {
    console.error("Error fetching team members:", error);
    return NextResponse.json(
      { error: "Failed to fetch team members" },
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

// POST /api/admin/team - Create new team member
export async function POST(request: NextRequest) {
  console.log('🔍 TEAM API: Starting POST request');

  try {
    console.log('🔐 TEAM API: Checking authentication...');
    // Check authentication
    const user = await authenticateRequest(request);
    console.log('👤 TEAM API: Auth result:', user ? 'authenticated' : 'not authenticated');

    if (!user || user.role !== "ADMIN") {
      console.log('❌ TEAM API: Unauthorized access attempt');
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

    console.log('📝 TEAM API: Parsing request body...');
    const body = await request.json();
    const { name, role, bio, avatar, email, order } = body;
    console.log('📋 TEAM API: Received data:', { name, role, email, avatar: avatar ? 'present' : 'none' });

    console.log('💾 TEAM API: Creating team member in database...');
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

    console.log('✅ TEAM API: Team member created successfully:', teamMember.id);
    return NextResponse.json(teamMember, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });
  } catch (error) {
    console.error('❌ TEAM API: Error creating team member:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorName = error instanceof Error ? error.name : 'Unknown';

    console.error('❌ TEAM API: Error details:', {
      message: errorMessage,
      stack: errorStack,
      name: errorName
    });

    return NextResponse.json(
      {
        error: "Failed to create team member",
        details: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal server error'
      },
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

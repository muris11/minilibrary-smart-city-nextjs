import { authenticateRequest } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log('🔍 TEST AUTH API: Request headers:', Object.fromEntries(request.headers));
  console.log('🍪 TEST AUTH API: Request cookies:', request.cookies.getAll());

  const user = await authenticateRequest(request);
  console.log('👤 TEST AUTH API: Auth result:', user ? `authenticated as ${user.email} (${user.role})` : 'not authenticated');

  return NextResponse.json({
    authenticated: !!user,
    user: user ? { userId: user.userId, email: user.email, role: user.role } : null
  });
}
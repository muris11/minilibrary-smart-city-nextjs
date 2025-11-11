import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { supabaseAdmin } from "./src/lib/supabase.ts";

async function testConnection() {
  console.log("🧪 Testing Supabase Connection...\n");

  // Test Prisma connection
  console.log("1. Testing Prisma connection...");
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
    console.log("✅ Prisma connection successful");

    // Try to query
    const userCount = await prisma.user.count();
    console.log("✅ Database query successful, User count:", userCount);
  } catch (err) {
    console.log("❌ Prisma connection/query failed:", err.message);
  } finally {
    await prisma.$disconnect();
  }

  // Test Supabase service role connection
  console.log("\n2. Testing Supabase service role connection...");
  try {
    const { data, error } = await supabaseAdmin
      .from("User")
      .select("*")
      .limit(1);
    if (error) {
      console.log("❌ Service role connection failed:", error.message);
    } else {
      console.log(
        "✅ Service role connection successful, found",
        data?.length || 0,
        "users"
      );
    }
  } catch (err) {
    console.log("❌ Service role connection error:", err.message);
  }

  console.log("\n📋 Environment Variables:");
  console.log(
    "NEXT_PUBLIC_SUPABASE_URL:",
    process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Not set"
  );
  console.log(
    "NEXT_PUBLIC_SUPABASE_ANON_KEY:",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Not set"
  );
  console.log(
    "SUPABASE_SERVICE_ROLE_KEY:",
    process.env.SUPABASE_SERVICE_ROLE_KEY &&
      process.env.SUPABASE_SERVICE_ROLE_KEY !== "your-service-role-key-here"
      ? "✅ Set"
      : "❌ Not set (still placeholder)"
  );
  console.log(
    "DATABASE_URL:",
    process.env.DATABASE_URL ? "✅ Set" : "❌ Not set"
  );
}

testConnection();

testConnection();

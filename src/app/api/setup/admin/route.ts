import { createUser } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Create admin user
    const admin = await createUser(
      "admin@minilibrary.com",
      "admin123",
      "Admin"
    );

    return NextResponse.json({
      message: "Admin user created successfully",
      user: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Error creating admin user:", error);
    return NextResponse.json(
      { error: "Failed to create admin user" },
      { status: 500 }
    );
  }
}

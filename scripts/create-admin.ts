import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import "dotenv/config";

const prisma = new PrismaClient();

async function createAdminUser() {
  try {
    console.log("Creating admin user...");

    // For development, skip database connection if not available
    if (process.env.NODE_ENV === "development" && !process.env.DATABASE_URL?.includes("postgresql://")) {
      console.log("⚠️  Development mode: Skipping database setup");
      console.log("✅ Admin credentials for development:");
      console.log("   Email: admin@gmail.com");
      console.log("   Password: admin");
      console.log("   (Using mock authentication)");
      return;
    }

    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: "admin@gmail.com" },
    });

    if (existingAdmin) {
      console.log("✅ Admin user already exists:", {
        id: existingAdmin.id,
        email: existingAdmin.email,
        name: existingAdmin.name,
        role: existingAdmin.role
      });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash("admin", 10);

    // Create admin user
    const adminUser = await prisma.user.create({
      data: {
        email: "admin@gmail.com",
        password: hashedPassword,
        name: "Admin User",
        role: "ADMIN"
      },
    });

    console.log("✅ Admin user created successfully:", {
      id: adminUser.id,
      email: adminUser.email,
      name: adminUser.name,
      role: adminUser.role
    });
  } catch (error) {
    console.error("Error creating admin user:", error);
    console.log("⚠️  Falling back to mock authentication for development");
    console.log("✅ Admin credentials:");
    console.log("   Email: admin@gmail.com");
    console.log("   Password: admin");
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();

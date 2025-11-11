import { createUser } from "@/lib/auth";

async function createAdminUser() {
  try {
    const admin = await createUser(
      "admin@example.com",
      "admin123",
      "Admin User"
    );
    console.log("Admin user created:", admin);
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
}

createAdminUser();

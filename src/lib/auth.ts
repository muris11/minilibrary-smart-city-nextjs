import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Mock user storage (in production, replace with real database)
const users: Array<{
  id: string;
  email: string;
  name?: string;
  password: string;
  role: string;
}> = [
  {
    id: "admin-1",
    email: "admin@gmail.com",
    name: "Admin User",
    password: "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // bcrypt hash for "admin"
    role: "ADMIN"
  }
];

export async function authenticateUser(email: string, password: string) {
  // For testing purposes, accept admin@gmail.com / admin
  if (email === "admin@gmail.com" && password === "admin") {
    return {
      id: "admin-1",
      email: "admin@gmail.com",
      name: "Admin User",
      role: "ADMIN",
    };
  }

  // Find user in mock storage
  const user = users.find(u => u.email === email);
  if (!user) {
    return null;
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  };
}

export async function createUser(
  email: string,
  password: string,
  name?: string
) {
  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: `user-${Date.now()}`,
    email,
    name,
    password: hashedPassword,
    role: "USER"
  };

  users.push(newUser);

  return {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
    role: newUser.role,
  };
}

export function generateToken(user: {
  id: string;
  email: string;
  name?: string;
  role: string;
}) {
  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as {
      userId: string;
      email: string;
      name?: string;
      role: string;
    };
  } catch {
    return null;
  }
}

export async function authenticateRequest(request: NextRequest) {
  try {
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      return null;
    }

    const decoded = verifyToken(token);
    return decoded;
  } catch {
    return null;
  }
}
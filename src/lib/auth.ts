import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const prisma = new PrismaClient();

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

  // Find user in database
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return null;
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return null;
  }

  return {
    id: user.id.toString(),
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
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role: "USER",
    },
  });

  return {
    id: newUser.id.toString(),
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
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function authenticateUser(email: string, password: string) {
  // For testing purposes, accept admin@example.com / admin123
  if (email === "admin@example.com" && password === "admin123") {
    return {
      id: "admin-1",
      email: "admin@example.com",
      name: "Admin User",
      role: "ADMIN",
    };
  }

  // Try database authentication
  const { data: user, error } = await supabase
    .from("User")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !user) {
    return null;
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name || undefined,
    role: user.role,
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

export async function createUser(
  email: string,
  password: string,
  name?: string
) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const { data: user, error } = await supabase
    .from("User")
    .insert({
      email,
      password: hashedPassword,
      name,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  };
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

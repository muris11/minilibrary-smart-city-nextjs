import { authenticateRequest } from "@/lib/auth";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request: NextRequest) {
  console.log('🔍 UPLOAD API: Starting POST request');

  try {
    console.log('🔐 UPLOAD API: Checking authentication...');
    // Check authentication
    const user = await authenticateRequest(request);
    console.log('👤 UPLOAD API: Auth result:', user ? 'authenticated' : 'not authenticated');

    if (!user || user.role !== "ADMIN") {
      console.log('❌ UPLOAD API: Unauthorized access attempt');
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      );
    }

    console.log('📝 UPLOAD API: Parsing form data...');
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      console.log('❌ UPLOAD API: No file received');
      return NextResponse.json({ error: "No file received" }, {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      });
    }

    console.log('📋 UPLOAD API: File received:', {
      name: file.name,
      size: file.size,
      type: file.type
    });

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only JPEG, PNG, and WebP are allowed." },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size too large. Maximum size is 5MB." },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      );
    }

    // Generate unique filename
    const fileExtension = file.name.split(".").pop();
    const fileName = `${randomUUID()}.${fileExtension}`;

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log('📤 UPLOAD API: Uploading file...');

    let publicUrl: string;

    // Check if we're in production (Vercel) or development
    if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
      // Use Vercel Blob Storage for production
      console.log('📤 UPLOAD API: Using Vercel Blob Storage (production)');
      const blob = await put(fileName, buffer, {
        access: 'public',
        contentType: file.type,
      });
      publicUrl = blob.url;
      console.log('✅ UPLOAD API: File uploaded to Vercel Blob:', publicUrl);
    } else {
      // Use local storage for development
      console.log('📤 UPLOAD API: Using local storage (development)');
      const { mkdir, writeFile } = await import("fs/promises");
      const { join } = await import("path");

      const uploadsDir = join(process.cwd(), "public", "uploads");
      try {
        await mkdir(uploadsDir, { recursive: true });
      } catch {
        // Directory might already exist, continue
      }

      const filePath = join(uploadsDir, fileName);
      await writeFile(filePath, buffer);
      publicUrl = `/uploads/${fileName}`;
      console.log('✅ UPLOAD API: File saved locally to:', filePath);
    }

    return NextResponse.json(
      {
        message: "File uploaded successfully",
        url: publicUrl,
        fileName: fileName,
        size: buffer.length,
        type: file.type,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );

  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );
  }
}

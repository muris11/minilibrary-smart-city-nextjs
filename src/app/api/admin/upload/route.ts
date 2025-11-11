import { authenticateRequest } from "@/lib/auth";
import { put } from "@vercel/blob";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

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
  console.log('📋 UPLOAD API: Request headers:', Object.fromEntries(request.headers));
  console.log('🍪 UPLOAD API: Request cookies:', request.cookies.getAll());

  try {
    console.log('🔐 UPLOAD API: Checking authentication...');
    // Check authentication
    const user = await authenticateRequest(request);
    console.log('👤 UPLOAD API: Auth result:', user ? `authenticated as ${user.email} (${user.role})` : 'not authenticated');

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

    console.log('📋 UPLOAD API: File details:', {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
    });

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      console.log('❌ UPLOAD API: Invalid file type:', file.type);
      return NextResponse.json(
        { error: `Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed. Got: ${file.type}` },
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
    const fileExtension = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `${randomUUID()}.${fileExtension}`;
    console.log('📝 UPLOAD API: Generated filename:', fileName);

    // Convert file to buffer
    console.log('🔄 UPLOAD API: Converting file to buffer...');
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    console.log('✅ UPLOAD API: File converted to buffer, size:', buffer.length);

    console.log('📤 UPLOAD API: Uploading file...');

    let publicUrl: string = "";

    // Check if we're in production (Vercel) or development
    // Use Vercel Blob if token is available AND we're in production
    const hasBlobToken = !!process.env.BLOB_READ_WRITE_TOKEN;
    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL;
    let shouldUseBlob = isProduction && hasBlobToken;

    console.log('🌍 UPLOAD API: Environment detection:', {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: process.env.VERCEL,
      hasBlobToken: hasBlobToken,
      isProduction: isProduction,
      willUseBlob: shouldUseBlob
    });

    if (shouldUseBlob) {
      // Use Vercel Blob Storage for production
      console.log('📤 UPLOAD API: Using Vercel Blob Storage (production)');
      try {
        const blob = await put(fileName, buffer, {
          access: 'public',
          contentType: file.type,
        });
        publicUrl = blob.url;
        console.log('✅ UPLOAD API: File uploaded to Vercel Blob:', publicUrl);
      } catch (blobError) {
        console.error('❌ UPLOAD API: Vercel Blob upload failed:', blobError);
        console.log('🔄 UPLOAD API: Falling back to local storage due to blob error');
        shouldUseBlob = false;
      }
    }

    if (!shouldUseBlob) {
      // Use local storage for development or as fallback
      console.log('📤 UPLOAD API: Using local storage');

      try {
        const { mkdir, writeFile } = await import("fs/promises");
        const { join } = await import("path");

        const uploadsDir = join(process.cwd(), "public", "uploads");
        console.log('📁 UPLOAD API: Uploads directory:', uploadsDir);

        try {
          await mkdir(uploadsDir, { recursive: true });
          console.log('✅ UPLOAD API: Uploads directory created/verified');
        } catch (mkdirError) {
          console.warn('⚠️ UPLOAD API: Directory creation warning:', mkdirError);
        }

        const filePath = join(uploadsDir, fileName);
        await writeFile(filePath, buffer);
        publicUrl = `/uploads/${fileName}`;
        console.log('✅ UPLOAD API: File saved locally to:', filePath);
      } catch (localError) {
        console.error('❌ UPLOAD API: Local storage failed:', localError);
        return NextResponse.json(
          { error: "Failed to save file" },
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
    console.error("❌ UPLOAD API: Unexpected error:", error);
    return NextResponse.json(
      { error: `Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}` },
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

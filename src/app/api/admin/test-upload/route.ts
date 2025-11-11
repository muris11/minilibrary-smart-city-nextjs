import { authenticateRequest } from "@/lib/auth";
import { put } from "@vercel/blob";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log('🧪 TEST UPLOAD API: Starting test upload');

  try {
    console.log('🔐 TEST UPLOAD API: Checking authentication...');
    const user = await authenticateRequest(request);
    console.log('👤 TEST UPLOAD API: Auth result:', user ? 'authenticated' : 'not authenticated');

    if (!user || user.role !== "ADMIN") {
      console.log('❌ TEST UPLOAD API: Unauthorized access attempt');
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log('📝 TEST UPLOAD API: Creating test image...');

    // Create a simple 1x1 transparent PNG
    const testImageBuffer = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');

    const fileName = `test-${randomUUID()}.png`;
    console.log('📝 TEST UPLOAD API: Generated filename:', fileName);

    console.log('📤 TEST UPLOAD API: Uploading test file...');

    let publicUrl: string;

    // Check if we're in production (Vercel) or development
    const hasBlobToken = !!process.env.BLOB_READ_WRITE_TOKEN;
    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL || hasBlobToken;

    console.log('🌍 TEST UPLOAD API: Environment detection:', {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: process.env.VERCEL,
      hasBlobToken: hasBlobToken,
      willUseBlob: isProduction
    });

    if (isProduction) {
      console.log('📤 TEST UPLOAD API: Using Vercel Blob Storage');
      try {
        const blob = await put(fileName, testImageBuffer, {
          access: 'public',
          contentType: 'image/png',
        });
        publicUrl = blob.url;
        console.log('✅ TEST UPLOAD API: File uploaded to Vercel Blob:', publicUrl);
      } catch (blobError) {
        console.error('❌ TEST UPLOAD API: Vercel Blob upload failed:', blobError);
        return NextResponse.json(
          { error: "Failed to upload to cloud storage" },
          { status: 500 }
        );
      }
    } else {
      console.log('📤 TEST UPLOAD API: Using local storage');
      try {
        const { mkdir, writeFile } = await import("fs/promises");
        const { join } = await import("path");

        const uploadsDir = join(process.cwd(), "public", "uploads");
        console.log('📁 TEST UPLOAD API: Uploads directory:', uploadsDir);

        await mkdir(uploadsDir, { recursive: true });
        const filePath = join(uploadsDir, fileName);
        await writeFile(filePath, testImageBuffer);
        publicUrl = `/uploads/${fileName}`;
        console.log('✅ TEST UPLOAD API: File saved locally to:', filePath);
      } catch (localError) {
        console.error('❌ TEST UPLOAD API: Local storage failed:', localError);
        return NextResponse.json(
          { error: "Failed to save file locally" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      message: "Test upload successful",
      url: publicUrl,
      fileName: fileName,
      size: testImageBuffer.length,
      type: 'image/png',
    });

  } catch (error) {
    console.error("❌ TEST UPLOAD API: Unexpected error:", error);
    return NextResponse.json(
      { error: `Test upload failed: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
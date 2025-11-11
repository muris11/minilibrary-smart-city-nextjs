import { authenticateRequest } from "@/lib/auth";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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

    console.log('📤 UPLOAD API: Uploading to Supabase Storage...');
    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("uploads")
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error('❌ UPLOAD API: Supabase upload error:', uploadError);

      // Provide more specific error messages
      if (uploadError.message?.includes("Bucket not found")) {
        return NextResponse.json(
          {
            error: "Storage bucket 'uploads' not found. Please create it in Supabase Dashboard",
            details: "Go to Supabase Dashboard > Storage > Create bucket named 'uploads' and make it public",
            instructions: [
              "1. Open Supabase Dashboard",
              "2. Go to Storage section",
              "3. Click 'Create bucket'",
              "4. Name: 'uploads'",
              "5. Check 'Public bucket'",
              "6. Add policies: Allow all users for SELECT, INSERT, UPDATE, DELETE"
            ]
          },
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

      if (uploadError.message?.includes("permission")) {
        return NextResponse.json(
          {
            error: "Storage permission denied",
            details: "Make sure the 'uploads' bucket has public read/write permissions"
          },
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

      return NextResponse.json(
        { error: `Upload failed: ${uploadError.message}` },
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

    console.log('✅ UPLOAD API: File uploaded successfully to Supabase');
    // Get public URL
    const { data: urlData } = supabase.storage
      .from("uploads")
      .getPublicUrl(fileName);

    console.log('🔗 UPLOAD API: Generated public URL:', urlData.publicUrl);

    if (!urlData?.publicUrl) {
      console.error('❌ UPLOAD API: Failed to get public URL');
      return NextResponse.json(
        { error: "Failed to get public URL" },
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

    console.log('🎉 UPLOAD API: Upload completed successfully, returning response');

    return NextResponse.json({
      message: "File uploaded successfully",
      url: urlData.publicUrl,
      fileName,
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });
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

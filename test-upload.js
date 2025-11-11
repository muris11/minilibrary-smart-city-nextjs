const fetch = require("node-fetch");
const FormData = require("form-data");
const fs = require("fs");

async function testUpload() {
  try {
    console.log("🔐 Testing login...");
    const loginRes = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@gmail.com", password: "admin" }),
    });

    console.log("Login status:", loginRes.status);
    const loginData = await loginRes.json();
    console.log("Login response:", loginData);

    const cookie = loginRes.headers.get("set-cookie");
    console.log("Cookie received:", cookie ? "YES" : "NO");

    if (cookie && loginRes.ok) {
      console.log("📤 Testing upload...");

      // Create a simple test image buffer
      const testImageBuffer = Buffer.from(
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
        "base64"
      );

      const form = new FormData();
      form.append("file", testImageBuffer, {
        filename: "test.png",
        contentType: "image/png",
      });

      const uploadRes = await fetch("http://localhost:3000/api/admin/upload", {
        method: "POST",
        headers: {
          Cookie: cookie,
        },
        body: form,
      });

      console.log("Upload status:", uploadRes.status);
      const uploadData = await uploadRes.text();
      console.log("Upload response:", uploadData);
    }
  } catch (error) {
    console.error("Test error:", error);
  }
}

testUpload();

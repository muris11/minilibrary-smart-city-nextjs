const http = require("http");
const querystring = require("querystring");

// First, login to get cookie
const loginData = querystring.stringify({
  email: "admin@gmail.com",
  password: "admin",
});

const loginOptions = {
  hostname: "localhost",
  port: 3000,
  path: "/api/auth/login",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(loginData),
  },
};

console.log("🔐 Attempting login...");

const loginReq = http.request(loginOptions, (res) => {
  console.log("Login status:", res.statusCode);
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    console.log("Login response:", data);
    const cookie = res.headers["set-cookie"];
    if (cookie) {
      console.log("✅ Got cookie, now testing upload...");
      testUpload(cookie[0]);
    } else {
      console.log("❌ No cookie received");
    }
  });
});

loginReq.on("error", (e) => console.error("Login error:", e));
loginReq.write(loginData);
loginReq.end();

function testUpload(cookie) {
  console.log("📤 Testing upload...");

  const uploadOptions = {
    hostname: "localhost",
    port: 3000,
    path: "/api/admin/test-upload",
    method: "POST",
    headers: {
      Cookie: cookie,
    },
  };

  const uploadReq = http.request(uploadOptions, (res) => {
    console.log("Upload status:", res.statusCode);
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => {
      console.log("Upload response:", data);
      process.exit(0);
    });
  });

  uploadReq.on("error", (e) => {
    console.error("Upload error:", e);
    process.exit(1);
  });
  uploadReq.end();
}

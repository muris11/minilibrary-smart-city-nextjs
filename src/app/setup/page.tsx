"use client";

import { useState } from "react";

export default function SetupPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const createAdmin = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/setup/admin", {
        method: "POST",
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Admin user created: ${data.user.email} / admin123`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch {
      setMessage("Failed to create admin user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Setup Admin User
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create an admin user to access the admin dashboard
          </p>
        </div>
        <div>
          <button
            onClick={createAdmin}
            disabled={loading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Admin User"}
          </button>
          {message && (
            <p className="mt-2 text-center text-sm text-gray-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

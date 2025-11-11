"use client";

import { Button } from "@/component/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Textarea } from "@/component/ui/textarea";
import { motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  Edit,
  FileText,
  LogOut,
  Plus,
  Settings,
  Shield,
  Sparkles,
  Trash2,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
  name?: string;
  role: string;
}

interface ContentPage {
  id: string;
  slug: string;
  title: string;
  content: string;
  metadata?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  email?: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [contentPages, setContentPages] = useState<ContentPage[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [editingContent, setEditingContent] = useState<ContentPage | null>(
    null
  );
  const [editingTeamMember, setEditingTeamMember] = useState<TeamMember | null>(
    null
  );

  // Helper function to decode JWT payload
  const decodeJWT = (token: string) => {
    try {
      const payload = token.split(".")[1];
      // JWT uses base64url encoding, need to handle it properly
      const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
      // Add padding if needed
      const paddedBase64 = base64.padEnd(
        base64.length + ((4 - (base64.length % 4)) % 4),
        "="
      );
      const decoded = atob(paddedBase64);
      return JSON.parse(decoded);
    } catch (error) {
      console.error("JWT decode error:", error);
      return null;
    }
  };

  useEffect(() => {
    // Check if user is logged in and is admin
    const checkAuth = () => {
      try {
        // Get token from cookies
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("auth-token="))
          ?.split("=")[1];

        if (!token) {
          console.log("No token found, redirecting to login");
          router.push("/login");
          return;
        }

        // Decode token to get user info
        const payload = decodeJWT(token);
        if (!payload) {
          console.log("Invalid token, redirecting to login");
          router.push("/login");
          return;
        }

        const userData = {
          id: payload.userId,
          email: payload.email,
          name: payload.name,
          role: payload.role,
        };

        console.log("User data:", userData);

        // Allow all authenticated users to access admin dashboard
        // if (userData.role !== "ADMIN") {
        //   console.log("User is not admin, redirecting to home");
        //   router.push("/");
        //   return;
        // }

        setUser(userData);
      } catch (error) {
        console.error("Auth check error:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Load content and team data
  useEffect(() => {
    if (user) {
      loadContentPages();
      loadTeamMembers();
    }
  }, [user]);

  const loadContentPages = async () => {
    try {
      const response = await fetch("/api/admin/content");
      if (response.ok) {
        const data = await response.json();
        setContentPages(data);
      }
    } catch (error) {
      console.error("Error loading content pages:", error);
    }
  };

  const loadTeamMembers = async () => {
    try {
      const response = await fetch("/api/admin/team");
      if (response.ok) {
        const data = await response.json();
        setTeamMembers(data);
      }
    } catch (error) {
      console.error("Error loading team members:", error);
    }
  };

  const handleSaveContent = async (contentData: Partial<ContentPage>) => {
    try {
      const method = editingContent ? "PUT" : "POST";
      const url = editingContent
        ? `/api/admin/content/${editingContent.id}`
        : "/api/admin/content";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contentData),
      });

      if (response.ok) {
        loadContentPages();
        setEditingContent(null);
      }
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };

  const handleSaveTeamMember = async (memberData: Partial<TeamMember>) => {
    try {
      const method = editingTeamMember?.id ? "PUT" : "POST";
      const url = editingTeamMember?.id
        ? `/api/admin/team/${editingTeamMember.id}`
        : "/api/admin/team";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(memberData),
      });

      if (response.ok) {
        loadTeamMembers();
        setEditingTeamMember(null);
      }
    } catch (error) {
      console.error("Error saving team member:", error);
    }
  };

  const handleDeleteContent = async (id: string) => {
    if (confirm("Are you sure you want to delete this content?")) {
      try {
        const response = await fetch(`/api/admin/content/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          loadContentPages();
        }
      } catch (error) {
        console.error("Error deleting content:", error);
      }
    }
  };

  const handleDeleteTeamMember = async (id: string) => {
    if (confirm("Are you sure you want to delete this team member?")) {
      try {
        const response = await fetch(`/api/admin/team/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          loadTeamMembers();
        }
      } catch (error) {
        console.error("Error deleting team member:", error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      document.cookie =
        "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const adminStats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Active Quizzes",
      value: "12",
      icon: FileText,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Content Pages",
      value: "8",
      icon: BarChart3,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "System Health",
      value: "98%",
      icon: Shield,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Building2 className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-400">
                  Welcome back, {user.name || user.email}
                </p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-500/20 text-red-400 hover:bg-red-500/10"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">System Overview</h2>
            </div>
            <p className="text-gray-300">
              Monitor and manage your MiniLibrary system. Track user activity,
              manage content, and maintain system health.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {adminStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-400">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex space-x-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "overview"
                  ? "bg-cyan-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("content")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "content"
                  ? "bg-cyan-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              Content Pages
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "team"
                  ? "bg-cyan-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              Team Members
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Users className="w-5 h-5 text-blue-400" />
                  Manage Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">
                  View, edit, and manage user accounts and permissions.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Manage Users
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <FileText className="w-5 h-5 text-green-400" />
                  Content Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">
                  Create, edit, and organize content pages and quizzes.
                </p>
                <Button
                  onClick={() => setActiveTab("content")}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Manage Content
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Settings className="w-5 h-5 text-purple-400" />
                  System Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">
                  Configure system settings and maintenance options.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  System Settings
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "content" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Content Pages</h3>
              <Button
                onClick={() => setEditingContent({} as ContentPage)}
                className="bg-green-600 hover:bg-green-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Content
              </Button>
            </div>

            <div className="grid gap-4">
              {contentPages.map((content) => (
                <Card
                  key={content.id}
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-700"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {content.title}
                        </h4>
                        <p className="text-gray-400">Slug: {content.slug}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {content.content.substring(0, 100)}...
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => setEditingContent(content)}
                          size="sm"
                          variant="outline"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleDeleteContent(content.id)}
                          size="sm"
                          variant="outline"
                          className="text-red-400 border-red-400 hover:bg-red-400/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "team" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Team Members</h3>
              <Button
                onClick={() => setEditingTeamMember({} as TeamMember)}
                className="bg-green-600 hover:bg-green-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Member
              </Button>
            </div>

            <div className="grid gap-4">
              {teamMembers.map((member) => (
                <Card
                  key={member.id}
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-700"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        {member.avatar && (
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        )}
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {member.name}
                          </h4>
                          <p className="text-gray-400">{member.role}</p>
                          {member.email && (
                            <p className="text-sm text-gray-500">
                              {member.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => setEditingTeamMember(member)}
                          size="sm"
                          variant="outline"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleDeleteTeamMember(member.id)}
                          size="sm"
                          variant="outline"
                          className="text-red-400 border-red-400 hover:bg-red-400/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Content Edit Modal */}
        {editingContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {editingContent.id ? "Edit Content" : "Add Content"}
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const data = {
                    slug: formData.get("slug") as string,
                    title: formData.get("title") as string,
                    content: formData.get("content") as string,
                    isActive: true,
                  };
                  handleSaveContent(data);
                }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="slug" className="text-white">
                    Slug
                  </Label>
                  <Input
                    id="slug"
                    name="slug"
                    defaultValue={editingContent.slug || ""}
                    placeholder="page-slug"
                    className="bg-slate-700 border-slate-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="title" className="text-white">
                    Title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    defaultValue={editingContent.title || ""}
                    placeholder="Page Title"
                    className="bg-slate-700 border-slate-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="content" className="text-white">
                    Content
                  </Label>
                  <Textarea
                    id="content"
                    name="content"
                    defaultValue={editingContent.content || ""}
                    placeholder="Page content..."
                    className="bg-slate-700 border-slate-600 text-white min-h-[200px]"
                    required
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button
                    type="button"
                    onClick={() => setEditingContent(null)}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Team Member Edit Modal */}
        {editingTeamMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {editingTeamMember.id ? "Edit Team Member" : "Add Team Member"}
              </h3>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const avatarFile = formData.get("avatar") as File;

                  let avatarUrl = editingTeamMember.avatar || "";

                  // Upload avatar if a file was selected
                  if (avatarFile && avatarFile.size > 0) {
                    try {
                      const uploadFormData = new FormData();
                      uploadFormData.append("file", avatarFile);

                      const uploadResponse = await fetch("/api/admin/upload", {
                        method: "POST",
                        body: uploadFormData,
                      });

                      if (uploadResponse.ok) {
                        const uploadResult = await uploadResponse.json();
                        avatarUrl = uploadResult.url;
                      } else {
                        alert("Failed to upload avatar image");
                        return;
                      }
                    } catch (error) {
                      console.error("Error uploading avatar:", error);
                      alert("Failed to upload avatar image");
                      return;
                    }
                  }

                  const data = {
                    name: formData.get("name") as string,
                    role: formData.get("role") as string,
                    bio: formData.get("bio") as string,
                    email: formData.get("email") as string,
                    avatar: avatarUrl,
                    order: parseInt(formData.get("order") as string) || 0,
                    isActive: true,
                  };
                  handleSaveTeamMember(data);
                }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    defaultValue={editingTeamMember.name || ""}
                    placeholder="Full Name"
                    className="bg-slate-700 border-slate-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="role" className="text-white">
                    Role
                  </Label>
                  <Input
                    id="role"
                    name="role"
                    defaultValue={editingTeamMember.role || ""}
                    placeholder="Job Title"
                    className="bg-slate-700 border-slate-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={editingTeamMember.email || ""}
                    placeholder="email@example.com"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="bio" className="text-white">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    defaultValue={editingTeamMember.bio || ""}
                    placeholder="Short biography..."
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="avatar" className="text-white">
                    Avatar Image
                  </Label>
                  <Input
                    id="avatar"
                    name="avatar"
                    type="file"
                    accept="image/*"
                    className="bg-slate-700 border-slate-600 text-white file:bg-purple-600 file:text-white file:border-0 file:rounded file:px-3 file:py-1 file:mr-3"
                  />
                  {editingTeamMember.avatar && (
                    <p className="text-sm text-gray-400 mt-1">
                      Current avatar will be replaced if you upload a new image
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="order" className="text-white">
                    Order
                  </Label>
                  <Input
                    id="order"
                    name="order"
                    type="number"
                    defaultValue={editingTeamMember.order || 0}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button
                    type="button"
                    onClick={() => setEditingTeamMember(null)}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

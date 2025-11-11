"use client";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  location?: string;
  expertise?: string[];
  achievements?: string[];
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export default function OurTeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("/api/admin/team");
        if (response.ok) {
          const data = await response.json();
          setTeamMembers(data);
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

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

  const teamStats = [
    {
      label: "Smart Cities Developed",
      value: teamMembers.length.toString(),
      icon: <Users className="w-6 h-6" />,
    },
    {
      label: "IoT Sensors Deployed",
      value: "450+",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      label: "Citizens Served",
      value: "75,000+",
      icon: <Badge className="w-6 h-6" />,
    },
    {
      label: "Data Points Collected",
      value: "85,000+",
      icon: <MapPin className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/5 rounded-full blur-2xl"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors duration-200 text-xs sm:text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Our Team
              </h1>
              <p className="text-xs sm:text-sm text-gray-400">
                Meet the Visionaries
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Meet Our <span className="text-purple-400">Expert Team</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              A diverse group of urban planners, technologists, and community
              leaders dedicated to building smarter, more sustainable cities
              across Indonesia.
            </p>
          </motion.div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20">
                  <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <div className="text-purple-400">{stat.icon}</div>
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/40 transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                      {member.avatar ? (
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-xl sm:text-2xl font-bold text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-white mb-1">
                      {member.name}
                    </CardTitle>
                    <p className="text-sm sm:text-base text-purple-400 font-semibold">
                      {member.role}
                    </p>
                    {member.location && (
                      <div className="flex items-center justify-center gap-1 mt-2 text-gray-400">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">
                          {member.location}
                        </span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="pt-0">
                    {member.bio && (
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                    )}

                    {/* Expertise */}
                    {member.expertise && member.expertise.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-purple-400 mb-2">
                          Expertise
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="text-xs bg-purple-500/20 text-purple-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {member.achievements && member.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-purple-400 mb-2">
                          Key Achievements
                        </h4>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {member.achievements
                            .slice(0, 2)
                            .map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-start gap-2"
                              >
                                <span className="text-purple-400 mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}

                    {/* Social Links */}
                    <div className="flex justify-center gap-2 sm:gap-3 pt-4 border-t border-slate-700">
                      {member.email && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-2 h-8 w-8 text-gray-400 hover:text-purple-400"
                          onClick={() => window.open(`mailto:${member.email}`)}
                        >
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      )}
                      {member.linkedin && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-2 h-8 w-8 text-gray-400 hover:text-purple-400"
                          onClick={() => window.open(member.linkedin)}
                        >
                          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      )}
                      {member.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-2 h-8 w-8 text-gray-400 hover:text-purple-400"
                          onClick={() => window.open(member.github)}
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      )}
                      {member.twitter && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-2 h-8 w-8 text-gray-400 hover:text-purple-400"
                          onClick={() => window.open(member.twitter)}
                        >
                          <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {teamMembers.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <Users className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-400 mb-2">
                No Team Members Yet
              </h3>
              <p className="text-sm sm:text-base text-gray-500">
                Team members will be displayed here once added by
                administrators.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-12 lg:py-16 border-t border-slate-800 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Join Our Mission
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Help us build the future of smart cities. We&apos;re always
              looking for talented individuals passionate about urban innovation
              and sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10 w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

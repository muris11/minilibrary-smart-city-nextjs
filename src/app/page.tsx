"use client";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";
import { Card, CardContent } from "@/component/ui/card";
import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  Shield,
  TreePine,
  User,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const EarthGlobe = dynamic(() => import("@/component/EarthGlobe"), {
  ssr: false,
});

export default function Home() {
  const navigationItems = [
    {
      id: "what",
      label: "What is Smart City?",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "pillars",
      label: "6 Pillars",
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      id: "lampung",
      label: "Smart Lampung",
      icon: <Wifi className="w-4 h-4" />,
    },
    { id: "tech", label: "Tech Stack", icon: <Zap className="w-4 h-4" /> },
    {
      id: "benefits",
      label: "Benefits",
      icon: <TreePine className="w-4 h-4" />,
    },
    { id: "team", label: "Our Team", icon: <Users className="w-4 h-4" /> },
    { id: "quiz", label: "Quiz", icon: <Shield className="w-4 h-4" /> },
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
          className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
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
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500/5 rounded-full blur-2xl"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Mini Library Smart City
                </h1>
                <p className="text-sm text-gray-400">Smart City Lampung</p>
              </div>
            </motion.div>

            <nav className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-end">
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors duration-200"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with 3D City */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Welcome to Mini Library Smart City
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Explore the innovative Smart City implementation in Lampung City
              through our interactive 3D experience and comprehensive knowledge
              base.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-4">
              <Badge
                variant="secondary"
                className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-sm"
              >
                Interactive 3D Model
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-sm"
              >
                Smart City Tech
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-500/20 text-green-300 border-green-500/30 text-sm"
              >
                Lampung Innovation
              </Badge>
            </div>
          </motion.div>

          {/* Earth Globe */}
          <div className="relative h-[300px] sm:h-96 md:h-[500px] rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center mx-4 sm:mx-0">
            <EarthGlobe
              width={800}
              height={500}
              showPillars={true}
              onPillarClick={(pillarId: string) => {
                // Navigate to relevant page based on pillar clicked
                const pillarRoutes: Record<string, string> = {
                  governance: "/smart-city-pillars",
                  economy: "/smart-city-pillars",
                  living: "/smart-city-pillars",
                  mobility: "/smart-city-pillars",
                  environment: "/smart-city-pillars",
                  people: "/smart-city-pillars",
                };
                const route = pillarRoutes[pillarId];
                if (route) {
                  window.location.href = route;
                }
              }}
            />

            {/* Floating Info Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 md:top-4 md:bottom-auto md:left-auto md:right-4 md:w-80 pointer-events-none hidden md:block"
            >
              <Card className="bg-slate-800/90 backdrop-blur-md border-cyan-500/20 max-w-[calc(100vw-2rem)] sm:max-w-none">
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-semibold text-cyan-400 mb-2 text-sm sm:text-base">
                    Interactive Earth Globe
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
                    Explore the global Smart City implementation. Click on any
                    pillar location to learn more about the 6 pillars of Smart
                    Cities.
                  </p>
                  <div className="text-xs text-cyan-300">
                    🌍 Lampung, Indonesia is highlighted in red
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Explore the <span className="text-cyan-400">Smart City</span>{" "}
            Knowledge Base
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationItems.map((item, index) => {
              const cardStyles = [
                // What is Smart City - Blue gradient
                "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-500/30",
                // 6 Pillars - Purple gradient
                "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30",
                // Smart Lampung - Green gradient
                "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30 hover:from-green-500/30 hover:to-emerald-500/30",
                // Tech Stack - Orange gradient
                "bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30 hover:from-orange-500/30 hover:to-red-500/30",
                // Benefits - Teal gradient
                "bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-teal-500/30 hover:from-teal-500/30 hover:to-cyan-500/30",
                // Our Team - Indigo gradient
                "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-indigo-500/30 hover:from-indigo-500/30 hover:to-purple-500/30",
                // Quiz - Yellow gradient
                "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 hover:from-yellow-500/30 hover:to-orange-500/30",
              ];

              const iconBgStyles = [
                "bg-blue-500/20 group-hover:bg-blue-500/30",
                "bg-purple-500/20 group-hover:bg-purple-500/30",
                "bg-green-500/20 group-hover:bg-green-500/30",
                "bg-orange-500/20 group-hover:bg-orange-500/30",
                "bg-teal-500/20 group-hover:bg-teal-500/30",
                "bg-indigo-500/20 group-hover:bg-indigo-500/30",
                "bg-yellow-500/20 group-hover:bg-yellow-500/30",
              ];

              const iconColorStyles = [
                "text-blue-400 group-hover:text-blue-300",
                "text-purple-400 group-hover:text-purple-300",
                "text-green-400 group-hover:text-green-300",
                "text-orange-400 group-hover:text-orange-300",
                "text-teal-400 group-hover:text-teal-300",
                "text-indigo-400 group-hover:text-indigo-300",
                "text-yellow-400 group-hover:text-yellow-300",
              ];

              const buttonColorStyles = [
                "text-blue-400 hover:text-blue-300",
                "text-purple-400 hover:text-purple-300",
                "text-green-400 hover:text-green-300",
                "text-orange-400 hover:text-orange-300",
                "text-teal-400 hover:text-teal-300",
                "text-indigo-400 hover:text-indigo-300",
                "text-yellow-400 hover:text-yellow-300",
              ];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card
                    className={`backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${cardStyles[index]}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`p-3 rounded-lg transition-all duration-300 group-hover:scale-110 ${iconBgStyles[index]}`}
                        >
                          <div
                            className={`transition-colors duration-300 ${iconColorStyles[index]}`}
                          >
                            {item.icon}
                          </div>
                        </div>
                        <h4 className="font-semibold text-lg text-white group-hover:text-gray-100 transition-colors">
                          {item.label}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                        Discover insights and information about{" "}
                        {item.label.toLowerCase()} in Lampung&apos;s Smart City
                        initiative.
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`mt-4 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-current/30 ${buttonColorStyles[index]} hover:bg-current/10`}
                        onClick={() => {
                          const routes: Record<string, string> = {
                            what: "/what-is-smart-city",
                            pillars: "/smart-city-pillars",
                            lampung: "/smart-lampung",
                            tech: "/tech-stack",
                            benefits: "/benefits",
                            team: "/our-team",
                            quiz: "/quiz",
                          };
                          const route = routes[item.id];
                          if (route) {
                            window.location.href = route;
                          }
                        }}
                      >
                        <span className="flex items-center gap-2">
                          Explore
                          <span className="transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:scale-110 group-hover:rotate-12 transform">
                            →
                          </span>
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Kelompok 1 Bahasa Inggris</p>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { Button } from "@/component/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CloudFog,
  Cpu,
  Droplets,
  ExternalLink,
  HardDrive,
  Home,
  Sparkles,
  Trash2,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Technology components data
const technologyComponents = [
  {
    icon: <HardDrive className="w-8 h-8" />,
    title: "IoT & Big Data Architecture",
    description:
      "Citywide network of connected devices enables officials to monitor key indicators (emissions, humidity, microclimate) and feed analytics dashboards for proactive interventions.",
    color: "bg-blue-500",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Smart Homes & Buildings",
    description:
      "Energy-aware buildings with pervasive computing enable residents to monitor and reduce energy consumption while optimizing heating, cooling, and lighting systems.",
    color: "bg-green-500",
  },
  {
    icon: <CloudFog className="w-8 h-8" />,
    title: "Pollution Monitoring",
    description:
      "Video analytics combined with ambient sensors track air quality, noise levels, and traffic emissions in real-time with early warning capabilities.",
    color: "bg-purple-500",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Renewable Energy Integration",
    description:
      "Smart grid technology optimizes energy distribution and storage from solar panels, wind turbines, and storage systems to reduce carbon footprint.",
    color: "bg-yellow-500",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Water Quality Monitoring",
    description:
      "Sensor networks detect leaks, monitor water quality, and optimize distribution pressure to conserve resources and ensure safe drinking water.",
    color: "bg-cyan-500",
  },
  {
    icon: <Trash2 className="w-8 h-8" />,
    title: "Smart Waste Management",
    description:
      "Intelligent containers with fill-level sensors and route optimization algorithms increase collection efficiency and reduce operational costs.",
    color: "bg-orange-500",
  },
];

// Technology references data
const technologyReferences = [
  {
    number: 1,
    title: "Planning Malaysia",
    description:
      "Smart City Technologies and Environment-Related Domain (2022)",
    url: "https://www.planningmalaysia.org/index.php/pmj/article/view/1084",
  },
  {
    number: 2,
    title: "SmartCitiesWorld",
    description: "Smart City Technology Trends (2023)",
    url: "https://www.smartcitiesworld.net/news/news/smart-city-technology-trends-2023-7892",
  },
  {
    number: 3,
    title: "IBM",
    description: "Smart City Solutions (2023)",
    url: "https://www.ibm.com/topics/smart-city",
  },
  {
    number: 4,
    title: "Cisco",
    description: "Smart City Technology Overview (2023)",
    url: "https://www.cisco.com/c/en/us/solutions/industries/smart-connected-communities/overview.html",
  },
];

export default function TechStackPage() {
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
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8"
      >
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 md:gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors duration-200 text-xs sm:text-sm"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Back to Home</span>
                <span className="xs:hidden">Home</span>
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25"
            >
              <Cpu className="w-4 h-4 sm:w-6 sm:h-6" />
            </motion.div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Supporting Technologies
              </h1>
              <p className="text-xs sm:text-sm text-gray-400">
                IoT and Big Data for Smart City
              </p>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-1 sm:gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm font-medium text-cyan-400">
                Cutting-Edge Technology
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
            >
              <span className="bg-linear-to-r from-cyan-400 via-purple-500 to-green-600 bg-clip-text text-transparent">
                Supporting Technologies
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
                for Smart City
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light px-2"
            >
              Discover the revolutionary{" "}
              <span className="text-cyan-400 font-semibold">
                IoT and Big Data architecture
              </span>{" "}
              that transforms urban environments through intelligent
              environmental monitoring and data-driven urban planning
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-2"
            >
              <div className="bg-linear-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg sm:rounded-xl px-3 py-2 sm:px-6 sm:py-3 min-w-[120px] sm:min-w-[140px]">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">
                  6
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Core Technologies
                </div>
              </div>
              <div className="bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg sm:rounded-xl px-3 py-2 sm:px-6 sm:py-3 min-w-[120px] sm:min-w-[140px]">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">
                  IoT
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Connected Systems
                </div>
              </div>
              <div className="bg-linear-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg sm:rounded-xl px-3 py-2 sm:px-6 sm:py-3 min-w-[120px] sm:min-w-[140px]">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">
                  Big Data
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Smart Analytics
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Technology Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 mb-6 sm:mb-8 md:mb-12 lg:mb-16 shadow-2xl shadow-slate-900/50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full max-w-5xl mx-auto"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-72 lg:h-96 xl:h-[500px] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-slate-700/50 shadow-2xl">
                <Image
                  src="/images/tech.png"
                  alt="Smart City Technologies"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6"
                >
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                    <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                      <span className="text-cyan-400 font-semibold text-sm sm:text-base lg:text-lg">
                        Revolutionary Approach:
                      </span>{" "}
                      Our IoT and Big Data architecture creates a living,
                      breathing network of intelligent sensors that continuously
                      monitor environmental conditions, enabling proactive
                      decision-making for sustainable urban development.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-center px-2"
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                  The Power of Connected Intelligence
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  Imagine a city where every device, sensor, and system works in
                  perfect harmony. Our advanced{" "}
                  <span className="text-cyan-400 font-semibold">
                    Internet of Things (IoT)
                  </span>{" "}
                  infrastructure seamlessly connects distributed devices across
                  the urban landscape, continuously collecting environmental
                  data to fuel{" "}
                  <span className="text-purple-400 font-semibold">
                    intelligent planning and decision-making
                  </span>
                  .
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-3 py-2 sm:px-4 sm:py-2"
                  >
                    <span className="text-cyan-400 font-medium text-sm sm:text-base">
                      Real-time Monitoring
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-3 py-2 sm:px-4 sm:py-2"
                  >
                    <span className="text-purple-400 font-medium text-sm sm:text-base">
                      Data-Driven Insights
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2 sm:px-4 sm:py-2"
                  >
                    <span className="text-green-400 font-medium text-sm sm:text-base">
                      Sustainable Solutions
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Core Technology Components */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 mb-6 sm:mb-8 md:mb-12 lg:mb-16 shadow-2xl shadow-slate-900/50"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-3 sm:mb-4">
                Core Technology Components
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover the six fundamental technologies that form the backbone
                of our intelligent urban ecosystem
              </p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-1 sm:gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 sm:px-4 sm:py-2 mt-3 sm:mt-4"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-cyan-400">
                  Interactive & Engaging
                </span>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {technologyComponents.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 hover:border-cyan-500/50 transition-all duration-500 h-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 group-hover:bg-slate-700/70">
                    <CardHeader className="text-center pb-3 sm:pb-4 md:pb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 ${tech.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        {tech.icon}
                      </motion.div>
                      <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight px-1">
                        {tech.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-3 sm:px-4 md:px-6">
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {tech.description}
                      </p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-600/50"
                      >
                        <div className="flex items-center justify-center gap-1 sm:gap-2 text-cyan-400">
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm font-medium">
                            Learn More
                          </span>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Resources & References */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 shadow-2xl shadow-slate-900/50"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400 mb-3 sm:mb-4">
                Technology Resources & References
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6">
                Explore authoritative sources and cutting-edge research that
                shape the future of Smart City technologies
              </p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-1 sm:gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1 sm:px-4 sm:py-2"
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                <span className="text-xs sm:text-sm font-medium text-purple-400">
                  Trusted Sources
                </span>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {technologyReferences.map((ref, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 * index, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 hover:border-purple-500/50 transition-all duration-500 h-full shadow-lg hover:shadow-xl hover:shadow-purple-500/10 group-hover:bg-slate-700/70">
                    <CardContent className="p-4 sm:p-5 md:p-6 lg:p-7">
                      <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300"
                        >
                          {ref.number}
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <motion.h4
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            {ref.title}
                          </motion.h4>
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 md:mb-5 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                            {ref.description}
                          </p>
                          <motion.a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 sm:gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-xs sm:text-sm md:text-base font-semibold group-hover:gap-2 sm:group-hover:gap-3"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>View Details</span>
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          </motion.a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center px-2"
            >
              <div className="bg-linear-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 border border-cyan-500/20 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 md:p-8">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Ready to Explore More?
                </h4>
                <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                  Dive deeper into the world of Smart City technologies and
                  discover how these innovations are transforming urban
                  environments worldwide.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Explore Smart City Pillars</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

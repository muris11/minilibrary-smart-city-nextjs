"use client";

import { Button } from "@/component/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  Car,
  ExternalLink,
  Sparkles,
  TreePine,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Benefits categories data
const benefitsCategories = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Government Services",
    description:
      "Integrated e-government portals and mobile reporting streamline permits, complaints, and social assistance, reducing processing time and increasing transparency.",
    color: "bg-blue-500",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Mobility & Transport",
    description:
      "Smart traffic signals and real-time traffic information improve travel times on key corridors, while public transport users gain more reliable ETAs.",
    color: "bg-green-500",
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Environmental Management",
    description:
      "Sensor networks for air quality, noise, and micro-climate create early alerts and evidence for environmental policy with digital waste collection optimization.",
    color: "bg-emerald-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Economic Development",
    description:
      "Digital marketplaces connect agricultural producers with wider markets, while skills training and digital literacy programs prepare residents for technology-enabled jobs.",
    color: "bg-purple-500",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Infrastructure Efficiency",
    description:
      "Smart water meters help detect leaks quickly, while improved data collection and analysis capabilities help local government make more informed budget decisions.",
    color: "bg-yellow-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Social Inclusion",
    description:
      "Better city services and quality of life attract investment and higher-skilled workers, contributing to regional economic development and improved outcomes for citizens.",
    color: "bg-pink-500",
  },
];

// Benefits references data
const benefitsReferences = [
  {
    number: 1,
    title: "Velatia Blog",
    description: "Benefits of Smart Cities for Citizens (2023)",
    url: "https://www.velatia.com/en/blog/benefits-smart-cities-citizens",
  },
  {
    number: 2,
    title: "Thames Freeport Blog",
    description: "Smart City Benefits: Economic and Social Impact (2023)",
    url: "https://www.thamesfreeport.com/blog/smart-city-benefits",
  },
  {
    number: 3,
    title: "NDS.id",
    description: "Smart City Implementation Benefits in Indonesia (2022)",
    url: "https://nds.id/en/insights/smart-city-benefits-indonesia",
  },
  {
    number: 4,
    title: "Plant Moran Insights",
    description: "10 Benefits of Smart Cities for Citizens (2018)",
    url: "https://www.plantemoran.com/explore-our-thinking/insight/2018/04/thinking-about-becoming-a-smart-city-10-benefits-of-smart-cities",
  },
];

export default function BenefitsPage() {
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
              <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6" />
            </motion.div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Smart City Benefits
              </h1>
              <p className="text-xs sm:text-sm text-gray-400">
                Lampung Province Implementation
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
                Transformative Impact
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
            >
              <span className="bg-linear-to-r from-cyan-400 via-purple-500 to-green-600 bg-clip-text text-transparent">
                Benefits Of Smart City
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
                in Lampung Province
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light px-2"
            >
              Discover how smart city solutions improve public services and
              quality of life in{" "}
              <span className="text-cyan-400 font-semibold">
                Lampung Province
              </span>{" "}
              through integrated e-government portals and intelligent urban
              systems
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
                  Key Benefits
                </div>
              </div>
              <div className="bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg sm:rounded-xl px-3 py-2 sm:px-6 sm:py-3 min-w-[120px] sm:min-w-[140px]">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">
                  E-Gov
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Digital Services
                </div>
              </div>
              <div className="bg-linear-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg sm:rounded-xl px-3 py-2 sm:px-6 sm:py-3 min-w-[120px] sm:min-w-[140px]">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">
                  Smart
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Urban Systems
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Benefits Image */}
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
                  src="/images/ben.png"
                  alt="Smart City Benefits"
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
                        Lampung Focus:
                      </span>{" "}
                      In Lampung Province—especially Bandar Lampung—smart city
                      solutions directly improve everyday public services
                      through integrated e-government portals and mobile
                      reporting systems.
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
                  The Power of Smart City Solutions
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  Imagine a province where every government service,
                  transportation system, and environmental monitoring works in
                  perfect harmony. Our advanced{" "}
                  <span className="text-cyan-400 font-semibold">
                    smart city solutions
                  </span>{" "}
                  seamlessly connect urban systems across Lampung, continuously
                  improving public services to fuel{" "}
                  <span className="text-purple-400 font-semibold">
                    better quality of life and sustainable development
                  </span>
                  .
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-3 py-2 sm:px-4 sm:py-2"
                  >
                    <span className="text-cyan-400 font-medium text-sm sm:text-base">
                      Digital Services
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-3 py-2 sm:px-4 sm:py-2"
                  >
                    <span className="text-purple-400 font-medium text-sm sm:text-base">
                      Smart Infrastructure
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2 sm:px-4 sm:py-2"
                  >
                    <span className="text-green-400 font-medium text-sm sm:text-base">
                      Quality of Life
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Detailed Benefits Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 mb-6 sm:mb-8 md:mb-12 lg:mb-16 shadow-2xl shadow-slate-900/50"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-1 sm:gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-medium text-cyan-400">
                  Smart City Benefits
                </span>
              </motion.div>

              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-center"
              >
                Benefits Of a Smart City in Lampung
              </motion.h3>

              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="bg-slate-700/30 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-slate-600/50"
                >
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    In Lampung Province—especially Bandar Lampung—smart city
                    solutions directly improve everyday public services.
                    Integrated e-government portals and mobile reporting
                    streamline permits, complaints, and social assistance,
                    reducing processing time and increasing transparency.
                    Real-time dashboards help local agencies prioritize issues
                    (from road maintenance to healthcare queues) and coordinate
                    faster emergency response. At the village level, digital
                    services can be federated into city and regency platforms,
                    enabling consistent service standards and better inclusion
                    for residents in peri-urban and rural areas.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="bg-slate-700/30 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-slate-600/50"
                >
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    Mobility, environment, and basic infrastructure management
                    also benefit substantially. Smart traffic signals and
                    real-time traffic information improve travel times on key
                    corridors, while public transport users gain more reliable
                    ETAs. Sensor networks for air quality, noise, and
                    micro-climate create early alerts and evidence for
                    environmental policy. Digital waste collection optimization
                    reduces costs and emissions, and smart water meters help
                    detect leaks quickly. These improvements are particularly
                    valuable in Lampung&apos;s growing urban areas, where
                    infrastructure strain is visible and residents directly
                    experience the benefits of more responsive city management.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="bg-slate-700/30 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-slate-600/50"
                >
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    Economic and social outcomes further demonstrate smart city
                    value. Digital marketplaces and e-commerce platforms connect
                    Lampung&apos;s agricultural producers with wider markets,
                    while skills training and digital literacy programs prepare
                    residents for technology-enabled jobs. Improved city
                    services and quality of life can attract investment and
                    higher-skilled workers, contributing to regional economic
                    development. Additionally, better data collection and
                    analysis capabilities help local government make more
                    informed budget and planning decisions, leading to more
                    effective use of public resources and improved outcomes for
                    citizens across all smart city domains.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Core Benefits Categories */}
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
                Key Benefits Categories
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover the six fundamental benefits that smart city solutions
                deliver to Lampung Province communities
              </p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-1 sm:gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 sm:px-4 sm:py-2 mt-3 sm:mt-4"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-cyan-400">
                  Comprehensive Impact
                </span>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {benefitsCategories.map((benefit, index) => (
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
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 ${benefit.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        {benefit.icon}
                      </motion.div>
                      <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight px-1">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-3 sm:px-4 md:px-6">
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {benefit.description}
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

          {/* Benefits Resources & References */}
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
                Benefits Research & Resources
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6">
                Explore authoritative sources and research that demonstrate the
                transformative benefits of smart cities
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
              {benefitsReferences.map((ref, index) => (
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
            ></motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

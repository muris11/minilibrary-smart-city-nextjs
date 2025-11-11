"use client";

import { Button } from "@/component/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Building2 } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const EarthGlobe = dynamic(() => import("@/component/EarthGlobe"), {
  ssr: false,
});

export default function SmartCityPillarsPage() {
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
      <header className="relative z-10 p-3 sm:p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-4">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors duration-200 text-xs sm:text-sm"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500 rounded-lg flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                6 Smart City Pillars
              </h1>
              <p className="text-xs sm:text-sm text-gray-400">
                Foundation of Urban Intelligence
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 sm:mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Six Pillars of Smart City
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto px-2">
              The interconnected framework that defines smart city development
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed px-2">
                A Smart City framework typically comprises six interconnected
                pillars: Smart Economy, Smart People, Smart Governance, Smart
                Mobility, Smart Environment, and Smart Living. Each pillar
                represents a domain of urban development where digital
                technologies and innovative practices are applied to improve
                efficiency, sustainability and quality of life.
              </p>
            </div>
          </motion.div>

          {/* Earth Globe Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
              <EarthGlobe width={800} height={500} showPillars={true} />
            </div>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12"
          >
            {/* Smart Economy */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex flex-col items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-purple-400 text-center">
                  Smart Economy
                </h3>
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-purple-500 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/eco.png"
                    alt="Smart Economy"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                This pillar focuses on economic vitality through innovation and
                competitiveness. A Smart Economy uses ICT to strengthen local
                businesses, attract investment and talent, and develop
                sustainable industries.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Innovation and entrepreneurship ecosystems
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Business-friendly digital services
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Flexible labor market training
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Global integration platforms
                </li>
              </ul>
            </div>

            {/* Smart People */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex flex-col items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 text-center">
                  Smart People
                </h3>
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-cyan-500 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/peo.png"
                    alt="Smart People"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                The Smart People pillar refers to the social and human capital
                of the city – education, skills, creativity and civic engagement
                of its residents.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Education and lifelong learning
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Creativity and cultural vibrancy
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Civic participation platforms
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Social inclusion programs
                </li>
              </ul>
            </div>

            {/* Smart Governance */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex flex-col items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-blue-400 text-center">
                  Smart Governance
                </h3>
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/gov.png"
                    alt="Smart Governance"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                This pillar covers the use of ICT by public institutions to
                enhance transparency, efficiency and citizen engagement through
                digital platforms.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  E-government services
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Transparent decision making
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Digital participation tools
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Data-driven policies
                </li>
              </ul>
            </div>

            {/* Smart Mobility */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex flex-col items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-amber-400 text-center">
                  Smart Mobility
                </h3>
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-amber-500 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/mob.png"
                    alt="Smart Mobility"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                Smart Mobility optimizes transportation systems through
                intelligent traffic management, multimodal connectivity, and
                sustainable transport solutions.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Intelligent traffic systems
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Integrated public transport
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Sustainable transport options
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Real-time mobility data
                </li>
              </ul>
            </div>

            {/* Smart Environment */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex flex-col items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-emerald-400 text-center">
                  Smart Environment
                </h3>
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-emerald-500 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/env.png"
                    alt="Smart Environment"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                Smart Environment promotes ecological balance through
                sustainable resource management, pollution monitoring, and green
                urban planning.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Environmental monitoring
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Sustainable resource management
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Green infrastructure
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Climate resilience planning
                </li>
              </ul>
            </div>

            {/* Smart Living */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 hover:border-green-500/30 transition-all duration-300">
              <div className="flex flex-col items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-green-400 text-center">
                  Smart Living
                </h3>
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-green-500 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/liv.png"
                    alt="Smart Living"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                Smart Living enhances quality of life through intelligent
                infrastructure, community services, and inclusive urban
                development for all citizens.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Smart home technologies
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Community health services
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Cultural and recreational access
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  Universal accessibility
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Framework Implementation Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 mb-8 sm:mb-10 md:mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3 sm:mb-4">
              Framework Implementation
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              These pillars were originally defined in the European Smart Cities
              model (Giffinger et al., 2007) and have been adopted in various
              international frameworks, including Indonesia&apos;s Smart City
              roadmap. The interconnected nature of these pillars ensures that
              smart city development is holistic and sustainable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">
                  6
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  Interconnected Pillars
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">
                  2007
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  Framework Established
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">
                  100+
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  Cities Worldwide
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Pillar Information */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Detailed Information
              </span>
            </h2>
          </motion.div>

          {/* Smart Governance Detailed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">
                  Smart Governance
                </h3>
                <p className="text-gray-400">
                  Digital Government & Citizen Engagement
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              This pillar covers the use of ICT by public institutions to
              enhance transparency, efficiency and citizen engagement through
              digital platforms.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    E-government services
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    Transparent decision making
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    Digital participation tools
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    Data-driven policies
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">
                  Advanced Capabilities:
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    Open data and transparency
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    Participatory decision-making
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    Inter-agency collaboration
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    Accountability and strategy
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 mt-6 leading-relaxed text-sm">
              For example, the beesmart.city model notes that Smart Governance
              &quot;strengthen[s] connections&quot; between government and
              society by using co-creation and crowdsourcing. Many cities
              worldwide have digital public service portals and open-data
              initiatives. In Indonesia, Jakarta&apos;s Smart City office uses
              an integrated command center and mobile apps to manage services
              and encourage citizen feedback. Even e-residency and e-government
              systems in countries like Estonia exemplify this pillar by
              allowing citizens extensive online access to government services.
            </p>
            <p className="text-gray-400 text-xs mt-4 italic">Source: ycp.com</p>
          </motion.div>

          {/* Smart Mobility Detailed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-400">
                  Smart Mobility
                </h3>
                <p className="text-gray-400">
                  Intelligent Transportation Systems
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              This pillar addresses the design of efficient, inclusive and
              sustainable transportation systems. Smart Mobility uses technology
              to optimize how people and goods move in the city.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                    Integrated public transit
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                    Real-time information
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                    Intelligent transport systems (ITS)
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                    Eco-friendly vehicles and infrastructure
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                    Mobility-as-a-Service
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Examples:</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The beesmart.city description explains Smart Mobility as
                  improving efficiency and service quality of urban transport
                  and adopting new, environmentally friendly modes. For example,
                  Singapore&apos;s &quot;Walk Cycle Ride&quot; initiative
                  integrates walking and cycling paths with its metro and bus
                  networks to encourage active mobility and reduce pollution.
                  Indonesia&apos;s smart mobility efforts include advanced
                  traffic control systems (Adaptive Traffic Control System) and
                  partnerships with ride-hailing services to improve flow and
                  reduce idle time.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-4 italic">Source: ycp.com</p>
          </motion.div>

          {/* Smart Environment Detailed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-400">
                  Smart Environment
                </h3>
                <p className="text-gray-400">Sustainable Urban Ecosystems</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              This pillar deals with environmental sustainability and resource
              management. A Smart Environment uses sensors, data and green
              technologies to improve urban ecosystems.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                    Environmental monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                    Energy management
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                    Green infrastructure
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                    Waste and water systems
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                    Regulatory tools
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Examples:</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  According to beesmart.city, Smart Environment focuses on
                  managing the built and natural environment with technology to
                  implement sustainable standards. An example is
                  Barcelona&apos;s &quot;superblocks&quot; project, which
                  redesigns neighborhoods to cut through-traffic – this has led
                  to better air quality and more green public space. Many cities
                  also set carbon-neutrality goals (e.g. Copenhagen aims to be
                  carbon-neutral by 2025). In Indonesia, some local governments
                  use online platforms and sensor networks to track pollution
                  and flooding, aligning with smart-environment objectives.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-4 italic">Source: ycp.com</p>
          </motion.div>

          {/* Smart Living Detailed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-400">
                  Smart Living
                </h3>
                <p className="text-gray-400">
                  Quality of Life & Community Services
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The final pillar, Smart Living, covers the overall quality of life
              and well-being of residents. It includes healthcare, education,
              housing, safety and culture.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    Healthcare services
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    Education and skills
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    Housing and urban design
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    Public safety and emergency response
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    Community and culture
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">Examples:</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Beesmart.city notes that Smart Living targets
                  &quot;inclusive&quot; improvements in livability, healthcare
                  (like e-health and assisted living), education, housing and
                  safety. For example, Singapore has developed HealthCity Novena
                  – an integrated healthcare campus with connected walkways and
                  parks – to enhance patient wellbeing. Its public housing
                  system (HDB) provides high-quality, mixed-use neighborhoods
                  for most citizens. In Indonesia, smart-living initiatives
                  include online public health consultations and remote learning
                  platforms used during COVID-19, reflecting a move toward more
                  connected, responsive social services.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-4 italic">Source: ycp.com</p>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 mb-12"
          >
            <p className="text-gray-300 leading-relaxed">
              Each of these six pillars – Economy, People, Governance, Mobility,
              Environment, and Living – must advance together to achieve a truly
              smart city. In practice, city planners align policies and
              technologies across these domains to create sustainable, inclusive
              and efficient urban ecosystems.
            </p>
            <p className="text-gray-400 text-xs mt-4 italic">
              Sources: beesmart.city, researchgate.net
            </p>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              More About Six Pillars of Smart City
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                  1
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-300 mb-2 text-sm sm:text-base">
                    <strong>ResearchGate.</strong> SMART CITIES RANKING: AN
                    EFFECTIVE INSTRUMENT FOR THE POSITIONING OF CITIES?
                  </p>
                  <a
                    href="https://www.researchgate.net/publication/228915976_Smart_cities_ranking_An_effective_instrument_for_the_positioning_of_the_cities"
                    className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                  2
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-300 mb-2 text-sm sm:text-base">
                    <strong>BeeSmart.City.</strong> SMART CITY INDICATORS
                  </p>
                  <a
                    href="https://www.beesmart.city/en/smart-city-indicators"
                    className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                  3
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-300 mb-2 text-sm sm:text-base">
                    <strong>YCP.</strong> Discovering The Six Pillars of
                    Indonesia&apos;s Smart Cities
                  </p>
                  <a
                    href="https://ycp.com/insights/article/discovering-the-six-pillars-of-indonesias-smart-cities"
                    className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                  4
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-300 mb-2 text-sm sm:text-base">
                    <strong>Catalonia.com.</strong> 5 reasons why Barcelona is
                    one of the world&apos;s leading smart cities
                  </p>
                  <a
                    href="https://catalonia.com/w/5-reasons-why-barcelona-is-one-of-the-world-s-leading-smart-cities"
                    className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-700/30 rounded-lg border border-slate-600 md:col-span-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                  5
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-300 mb-2 text-sm sm:text-base">
                    <strong>World Economic Forum.</strong> 3 reasons why
                    Singapore is the smartest city in the world
                  </p>
                  <a
                    href="https://www.weforum.org/stories/2019/11/singapore-smart-city"
                    className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

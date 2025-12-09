"use client";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Building2 } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const EarthGlobe = dynamic(() => import("@/component/EarthGlobe"), {
  ssr: false,
});

export default function SmartLampungPage() {
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
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
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
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Smart Lampung
                </h1>
                <p className="text-xs sm:text-sm text-gray-400">
                  Implementation Challenges
                </p>
              </div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Smart City Implementation in Lampung Province
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto px-2 sm:px-4">
              Examining the current state of smart city development in Lampung
              Province, Indonesia, focusing particularly on environmental
              management and sustainability indicators.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-center px-2 sm:px-4">
              <Badge
                variant="secondary"
                className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs sm:text-sm px-2 py-1"
              >
                Environmental Focus
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs sm:text-sm px-2 py-1"
              >
                Infrastructure
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-500/20 text-green-300 border-green-500/30 text-xs sm:text-sm px-2 py-1"
              >
                Governance
              </Badge>
              <Badge
                variant="secondary"
                className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs sm:text-sm px-2 py-1"
              >
                Citizen-Centric
              </Badge>
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
        </div>
      </section>

      <section className="py-6 sm:py-8 md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">
                  Lampung Smart City
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  Overview of smart city initiatives and development in Lampung
                  Province
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4 md:p-6 border border-slate-600">
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    Lampung Province has emerged as a promising location for
                    smart city development in Indonesia. With its strategic
                    position, rich natural resources, and growing population,
                    the province presents unique opportunities for implementing
                    innovative urban solutions that balance technological
                    advancement with environmental sustainability.
                  </p>
                </div>

                <div className="w-full">
                  <Image
                    src="/images/gajah.png"
                    alt="Lampung Province Iconic Symbol"
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4 md:p-6 border border-slate-600">
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    The provincial government has identified smart city
                    development as a key priority, focusing on creating
                    integrated systems that enhance livability, improve service
                    delivery, and promote sustainable economic growth across
                    urban and rural areas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Findings Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">
                  Key Findings
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  Assessment of smart city development challenges and
                  opportunities in Lampung Province
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4 md:p-6 border border-slate-600">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      Infrastructure
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    Moderate digital infrastructure requiring IoT network
                    investment
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4 md:p-6 border border-slate-600">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      Environment
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    Air quality monitoring and waste management as top
                    priorities
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4 md:p-6 border border-slate-600">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      Governance
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    Strong government commitment but needs technical capacity
                    building
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4 md:p-6 border border-slate-600">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.75 1.75 0 0018.25 7.5h-7.5A1.75 1.75 0 009.04 9.87L6.5 16H9v6h10zM5.5 7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.83 9 7 9 5.5 8.33 5.5 7.5z" />
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      Citizens
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    High mobile penetration enables digital participation
                    opportunities
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4 md:p-6 border border-slate-600 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      Economy
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    Smart initiatives could boost tourism and agricultural
                    sectors
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technology Implementation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">
                  Technology Implementation
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  Digital transformation initiatives and technological solutions
                  for Lampung Province
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4 md:p-6 border border-slate-600">
                  <h4 className="text-base sm:text-lg md:text-xl font-medium text-cyan-400 mb-2 sm:mb-3 md:mb-4">
                    IoT & Smart Infrastructure
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    Implementation of Internet of Things (IoT) sensors for
                    real-time monitoring of environmental conditions, traffic
                    management, and public utilities. Smart lighting systems and
                    automated waste management solutions are being piloted in
                    key urban areas.
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4 md:p-6 border border-slate-600">
                  <h4 className="text-base sm:text-lg md:text-xl font-medium text-green-400 mb-2 sm:mb-3 md:mb-4">
                    Digital Governance Platform
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    Development of integrated digital platforms for citizen
                    services, including e-governance systems, mobile
                    applications for public reporting, and data analytics
                    dashboards for decision-making support.
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8">
                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4 md:p-6 border border-slate-600">
                  <h4 className="text-base sm:text-lg md:text-xl font-medium text-amber-400 mb-2 sm:mb-3 md:mb-4">
                    Capacity Building & Training
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    Comprehensive training programs for government officials,
                    local businesses, and citizens to ensure successful adoption
                    of smart city technologies. Partnerships with universities
                    and technology companies to develop local expertise and
                    innovation.
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8">
                <Image
                  src="/images/menara.jpg"
                  alt="Technology Infrastructure in Lampung"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="mb-3 sm:mb-4 md:mb-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">
                  Watch: Smart City Lampung Overview
                </h2>
              </div>
              <div className="aspect-video w-full max-w-4xl mx-auto">
                <iframe 
                  src="https://www.youtube.com/embed/JuKv-4bw3QQ"
                  title="Smart City Lampung"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Current Status Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="mb-3 sm:mb-4 md:mb-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">
                  Current Status in Bandar Lampung
                </h2>
              </div>
              <div className="bg-linear-to-r from-blue-50 to-green-50 rounded-lg p-3 sm:p-4 md:p-6 border border-cyan-500/20">
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                  The assessment reveals both opportunities and challenges for
                  smart city development in the region. Basic digital governance
                  systems are in place with several pilot projects showing
                  promising results.
                </p>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8">
                <Image
                  src="/images/lmg.JPG"
                  alt="Current Development Status in Bandar Lampung"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* References Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="mb-3 sm:mb-4 md:mb-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">
                  Research References
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                    1
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                      <strong>Planning Malaysia.</strong> Smart Cities and
                      Environment Study Indonesia-France (2022)
                    </p>
                    <a
                      href="https://www.planningmalaysia.org/index.php/pmj/article/view/1084"
                      className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                    2
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                      <strong>Planning Malaysia.</strong> Official Research PDF
                    </p>
                    <a
                      href="https://www.planningmalaysia.org/index.php/pmj/article/view/1084/774"
                      className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open PDF
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-slate-700/30 rounded-lg border border-slate-600 sm:col-span-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                    3
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                      <strong>Scholar Repository.</strong> Article metadata and
                      citations
                    </p>
                    <a
                      href="https://scholar.undip.ac.id/en/publications/the-development-of-smart-cities-and-environment-related-domain-a-"
                      className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Record
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

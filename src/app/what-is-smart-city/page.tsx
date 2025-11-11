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

export default function WhatIsSmartCityPage() {
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  What is a Smart City?
                </h1>
                <p className="text-sm text-gray-400">
                  Understanding the Future of Urban Living
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Redefining Urban Intelligence
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
              A Smart City integrates technology, data, and innovation to create
              sustainable, efficient, and livable urban environments. It&apos;s
              about using digital solutions to enhance quality of life, optimize
              resource usage, and create more responsive governance.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-4">
              <Badge
                variant="secondary"
                className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-sm"
              >
                Technology-Driven
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-sm"
              >
                Data-Powered
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-500/20 text-green-300 border-green-500/30 text-sm"
              >
                Citizen-Centric
              </Badge>
              <Badge
                variant="secondary"
                className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-sm"
              >
                Sustainable Future
              </Badge>
            </div>
          </motion.div>

          {/* Earth Globe Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 sm:mb-12"
          >
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
              <EarthGlobe width={800} height={500} showPillars={true} />
            </div>
          </motion.div>

          {/* Smart City Components section removed as requested */}

          {/* Benefits Section removed as requested */}
        </div>
      </section>
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 sm:mb-12"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
                  Smart City Introduction
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  Understanding the concept and implementation of smart cities
                </p>
              </div>

              {/* Main Definition */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  Definition of Smart City
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-slate-700/30 rounded-lg p-4 sm:p-6 border border-slate-600">
                    <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      A Smart City is an urban area that leverages digital
                      technologies, data analytics, and interconnected systems
                      to improve the quality of life for residents, optimize
                      city operations, and promote sustainable development. It
                      integrates information and communication technologies
                      (ICT), Internet of Things (IoT), big data, and artificial
                      intelligence (AI) to enhance urban infrastructure,
                      including transportation networks, water and energy
                      management, waste disposal, and public safety.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      Smart cities also provide more interactive and responsive
                      governance, allowing citizens to report issues, access
                      services digitally, and participate in urban planning,
                      while making public spaces safer and more inclusive
                      (European Commission, 2023; IBM, 2023).
                    </p>
                  </div>

                  <div className="bg-slate-700/30 rounded-lg p-4 sm:p-6 border border-slate-600">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      Smart cities leverage technology to improve the overall
                      standard of living. Examples include Singapore&apos;s
                      Smart Nation initiative, Barcelona&apos;s smart lighting
                      and waste management systems, and Jakarta&apos;s
                      &quot;Jakarta Kini (JAKI)&quot; platform, which enhances
                      citizen engagement and public service delivery. Smart
                      cities not only support sustainable urban growth but also
                      encourage economic innovation, better resource management,
                      and adaptive solutions for challenges such as traffic
                      congestion, pollution, and an aging population
                      (TechTarget, 2023; Plant Moran, 2018; Cisco, 2023).
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology Integration */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  Technology Integration
                </h3>

                {/* IoT & Data Analytics Section */}
                <div className="mb-6 sm:mb-8">
                  <div className="bg-slate-700/30 rounded-lg p-4 sm:p-6 border border-slate-600">
                    <h4 className="text-lg sm:text-xl font-medium text-cyan-400 mb-3 sm:mb-4">
                      IoT & Data Analytics
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      In a smart city, IoT devices, sensors, and real-time data
                      analytics are widely used to monitor and manage
                      infrastructure. These technologies enable city
                      administrators to make proactive decisions, reduce
                      congestion, lower energy consumption, and improve overall
                      urban livability. Residents experience safer, cleaner, and
                      more convenient urban environments due to these
                      intelligent systems (IBM, 2023).
                    </p>
                    <div className="w-full">
                      <Image
                        src="/images/bg1.png"
                        alt="Smart City IoT Infrastructure"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* AI & Cloud Computing Section */}
                <div className="mb-6 sm:mb-8">
                  <div className="bg-slate-700/30 rounded-lg p-4 sm:p-6 border border-slate-600">
                    <h4 className="text-lg sm:text-xl font-medium text-purple-400 mb-3 sm:mb-4">
                      AI & Cloud Computing
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      The integration of AI, big data, and cloud computing
                      enables cities to be adaptive, resilient, and responsive
                      to emerging challenges. Advanced communication networks
                      and integrated systems allow for real-time monitoring of
                      traffic, utilities, and public safety, providing adaptive
                      solutions to urban challenges.
                    </p>
                    <div className="w-full">
                      <Image
                        src="/images/bg2.png"
                        alt="Smart City AI and Cloud Computing"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Citizen Engagement & Benefits */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  Citizen Engagement & Benefits
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-slate-700/30 rounded-lg p-4 sm:p-6 border border-slate-600">
                    <h4 className="text-base sm:text-lg font-medium text-green-400 mb-2 sm:mb-3">
                      Digital Participation
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      Smart cities emphasize citizen engagement and economic
                      innovation. Digital platforms allow residents to report
                      issues, participate in urban planning, and interact with
                      local authorities, while businesses benefit from better
                      connectivity, logistics efficiency, and opportunities for
                      technological development.
                    </p>
                  </div>

                  <div className="bg-slate-700/30 rounded-lg p-4 sm:p-6 border border-slate-600">
                    <h4 className="text-base sm:text-lg font-medium text-amber-400 mb-2 sm:mb-3">
                      Sustainability & Growth
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      The benefits of smart cities extend to environmental
                      sustainability and social welfare. By improving energy
                      efficiency, monitoring pollution, and optimizing public
                      services such as healthcare, transportation, and
                      administrative processes, smart cities reduce their
                      ecological footprint while enhancing citizens&apos; daily
                      lives. Furthermore, they encourage public-private
                      collaboration and attract innovative businesses,
                      contributing to economic growth and technological
                      advancement (Plant Moran, 2018).
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Statement */}
              <div className="bg-linear-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-4 sm:p-6 border border-cyan-500/20">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  The Ultimate Vision
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Ultimately, smart cities create a connected urban ecosystem
                  where infrastructure, residents, and services interact
                  intelligently. By fostering sustainable growth, efficiency,
                  and inclusivity, smart cities aim to improve both the
                  livability and resilience of urban environments (Cisco, 2023).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-purple-400">
                  Video About Smart City
                </h2>
              </div>
              <div className="aspect-video w-full max-w-4xl mx-auto">
                <iframe
                  src="https://www.youtube.com/embed/U8cCbWwx3s4"
                  title="YouTube video player"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
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
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-green-400">
                  References & Further Reading
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                    1
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 mb-2 text-sm sm:text-base">
                      <strong>European Commission.</strong> Smart Cities: City
                      Initiatives. 2023
                    </p>
                    <a
                      href="https://commission.europa.eu/eu-regional-and-urban-development/topics/cities-and-urban-development/city-initiatives/smart-cities_en"
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
                      <strong>IBM.</strong> What is a Smart City? 2023.
                    </p>
                    <a
                      href="https://www.ibm.com/think/topics/smart-city"
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
                      <strong>TechTarget.</strong> Smart City Definition. 2023
                    </p>
                    <a
                      href="https://www.techtarget.com/iotagenda/definition/smart-city"
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
                      <strong>Plant Moran.</strong> Smart Cities: The Future of
                      Urban Development. 2018
                    </p>
                    <a
                      href="https://www.plantmoran.com/explore-our-thinking/insight/2018/05/smart-cities-the-future-of-urban-development"
                      className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-700/30 rounded-lg border border-slate-600 sm:col-span-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                    5
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 mb-2 text-sm sm:text-base">
                      <strong>Cisco.</strong> Smart Cities: Improving Lives
                      Through Technology. 2023
                    </p>
                    <a
                      href="https://www.cisco.com/c/en/us/solutions/industries/smart-cities.html"
                      className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details →
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

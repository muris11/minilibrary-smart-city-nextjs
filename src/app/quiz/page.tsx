"use client";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  CheckCircle,
  Clock,
  RotateCcw,
  Shield,
  Star,
  Target,
  Trophy,
  XCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

// Quiz questions data (TIDAK DIUBAH)
const quizQuestions = [
  {
    id: 1,
    question: "What is the primary goal of a Smart City?",
    options: [
      "Building more skyscrapers",
      "Using technology to improve quality of life and sustainability",
      "Increasing population density",
      "Replacing all traditional infrastructure",
    ],
    correctAnswer: 1,
    explanation:
      "Smart Cities aim to enhance quality of life, sustainability, " +
      "and efficiency through technology integration.",
  },
  {
    id: 2,
    question: "Which of the following is NOT one of the 6 Smart City Pillars?",
    options: [
      "Smart Governance",
      "Smart Economy",
      "Smart Buildings",
      "Smart Environment",
    ],
    correctAnswer: 2,
    explanation:
      "The 6 pillars are: Smart Governance, Smart Economy, Smart Living, " +
      "Smart Mobility, Smart Environment, and Smart People.",
  },
  {
    id: 3,
    question:
      "What technology is fundamental to IoT infrastructure in Smart Cities?",
    options: [
      "Virtual Reality",
      "Connected sensors and devices",
      "Quantum computing",
      "Blockchain only",
    ],
    correctAnswer: 1,
    explanation:
      "IoT relies on networks of connected sensors and devices that " +
      "collect and transmit real-time data.",
  },
  {
    id: 4,
    question:
      "In Lampung's Smart City implementation, what is the current " +
      "overall progress?",
    options: ["25%", "45%", "65%", "85%"],
    correctAnswer: 2,
    explanation:
      "Lampung's Smart City projects show an average of 65% completion " +
      "across active initiatives.",
  },
  {
    id: 5,
    question:
      "Which Smart City pillar focuses on transportation and traffic systems?",
    options: [
      "Smart Economy",
      "Smart Mobility",
      "Smart Living",
      "Smart Governance",
    ],
    correctAnswer: 1,
    explanation:
      "Smart Mobility addresses intelligent transportation systems, " +
      "traffic management, and sustainable movement.",
  },
  {
    id: 6,
    question: "What is a key benefit of Smart Governance?",
    options: [
      "Higher taxes",
      "Transparent and efficient public services",
      "More government buildings",
      "Reduced citizen participation",
    ],
    correctAnswer: 1,
    explanation:
      "Smart Governance aims to make public services more transparent, " +
      "efficient, and accessible to citizens.",
  },
  {
    id: 7,
    question: "Which technology is crucial for data analysis in Smart Cities?",
    options: [
      "Fax machines",
      "Big Data Analytics",
      "Postal services",
      "Manual spreadsheets only",
    ],
    correctAnswer: 1,
    explanation:
      "Big Data Analytics processes massive amounts of urban data to " +
      "derive insights and optimize city operations.",
  },
  {
    id: 8,
    question: "What does the Smart Environment pillar primarily address?",
    options: [
      "Building more parks",
      "Environmental monitoring and sustainability",
      "Weather prediction only",
      "Indoor air quality only",
    ],
    correctAnswer: 1,
    explanation:
      "Smart Environment focuses on sustainability, resource management, " +
      "and environmental monitoring.",
  },
  {
    id: 9,
    question: "Which of these is a real Smart City project in Lampung?",
    options: [
      "Space exploration center",
      "Smart Traffic System in Bandar Lampung",
      "Underwater city",
      "Floating restaurants",
    ],
    correctAnswer: 1,
    explanation:
      "Bandar Lampung Smart Traffic System is one of the active projects " +
      "in Lampung's Smart City implementation.",
  },
  {
    id: 10,
    question: "What is the main focus of Smart People pillar?",
    options: [
      "Building taller people",
      "Digital literacy and skill development",
      "Population control",
      "Physical fitness only",
    ],
    correctAnswer: 1,
    explanation:
      "Smart People focuses on digital literacy, education, skill " +
      "development, and inclusive innovation.",
  },
];

export default function QuizPage() {
  const [quizState, setQuizState] = useState<"start" | "playing" | "finished">(
    "start"
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  const handleFinishQuiz = useCallback(() => {
    let correctCount = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setQuizState("finished");
  }, [selectedAnswers]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizState === "playing" && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && quizState === "playing") {
      handleFinishQuiz();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, quizState, handleFinishQuiz]);

  const startQuiz = () => {
    setQuizState("playing");
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setScore(0);
    setTimeLeft(600);
    setShowExplanation(false);
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const showAnswer = () => {
    setShowExplanation(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      handleFinishQuiz();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 90)
      return {
        message: "Outstanding! You're a Smart City expert!",
        color: "text-green-400",
        icon: Trophy,
      };
    if (percentage >= 70)
      return {
        message: "Great job! You know your Smart Cities!",
        color: "text-cyan-400",
        icon: Star,
      };
    if (percentage >= 50)
      return {
        message: "Good effort! Keep learning about Smart Cities!",
        color: "text-amber-400",
        icon: Target,
      };
    return {
      message: "Keep exploring! There's more to learn!",
      color: "text-purple-400",
      icon: Brain,
    };
  };

  /** ---------- START STATE ---------- */
  if (quizState === "start") {
    return (
      <div className="min-h-dvh bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-100 antialiased overflow-hidden relative">
        {/* Subtle grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light"
          style={{
            backgroundImage: "radial-gradient(#fff 1px,transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500/5 rounded-full blur-2xl"
          />
        </div>

        {/* Header */}
        <header className="relative z-10 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 rounded-xl px-3 py-2"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Back to Home</span>
                </Button>
              </Link>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30 ring-1 ring-white/20">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Smart City Quiz
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300">
                    Test Your Knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10 min-h-[calc(100vh-200px)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl mx-auto group"
          >
            <Card className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_50px_-15px_rgba(0,0,0,0.6)]">
              <CardHeader className="text-center pb-6">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30"
                >
                  <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-bold mb-2 sm:mb-3">
                  Smart City Challenge
                </CardTitle>
                <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed px-2 sm:px-4">
                  Test your knowledge about Smart Cities and Lampung&apos;s
                  implementation with this interactive quiz
                </p>
              </CardHeader>
              <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 sm:p-5 lg:p-6 shadow-inner shadow-black/20 hover:border-cyan-400/40 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,.6)] transition-all"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">
                      {quizQuestions.length}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-slate-300 font-medium">
                      Questions
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 sm:p-5 lg:p-6 shadow-inner shadow-black/20 hover:border-purple-400/40 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,.6)] transition-all"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">
                      10
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-slate-300 font-medium">
                      Minutes
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 p-3 sm:p-4 bg-linear-to-r from-cyan-500/15 to-blue-500/15 rounded-lg border border-cyan-500/30"
                  >
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" />
                    <span className="text-sm sm:text-base text-slate-100 font-medium">
                      Cover all 6 Smart City Pillars
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3 p-3 sm:p-4 bg-linear-to-r from-green-500/15 to-emerald-500/15 rounded-lg border border-green-500/30"
                  >
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 shrink-0" />
                    <span className="text-sm sm:text-base text-slate-100 font-medium">
                      Lampung implementation specifics
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-3 p-3 sm:p-4 bg-linear-to-r from-amber-500/15 to-orange-500/15 rounded-lg border border-amber-500/30"
                  >
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 shrink-0" />
                    <span className="text-sm sm:text-base text-slate-100 font-medium">
                      Technology and infrastructure concepts
                    </span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <Link href="/" className="flex-1">
                    <Button
                      variant="outline"
                      className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 rounded-xl px-3 py-2 border border-white/15 bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                  <Button
                    onClick={startQuiz}
                    className="flex-1 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 sm:py-4 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-all"
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    Start Quiz
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  /** ---------- PLAYING STATE ---------- */
  if (quizState === "playing") {
    const question = quizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    const hasSelected = selectedAnswers[currentQuestion] !== undefined;

    return (
      <div className="min-h-dvh bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-100 antialiased overflow-hidden relative">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light"
          style={{
            backgroundImage: "radial-gradient(#fff 1px,transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500/5 rounded-full blur-2xl"
          />
        </div>

        {/* Header */}
        <header className="relative z-10 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 rounded-xl px-3 py-2"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Back to Home</span>
                </Button>
              </Link>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30 ring-1 ring-white/20">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Smart City Quiz
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
          {/* Progress Section */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-4">
              <Badge
                variant="secondary"
                className="bg-linear-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 border-cyan-500/20 px-3 py-1.5 text-sm font-semibold shadow-lg"
              >
                <Clock className="w-4 h-4 mr-2" />
                {formatTime(timeLeft)}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-linear-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/20 px-3 py-1.5 text-sm font-semibold shadow-lg"
              >
                Question {currentQuestion + 1} of {quizQuestions.length}
              </Badge>
            </div>

            {/* Premium progress wrapper */}
            <div className="relative rounded-full bg-white/5 border border-white/10 h-4 sm:h-5 overflow-hidden">
              {/* static shimmer */}
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 animate-pulse" />
              {/* actual progress bar */}
              <div
                className="absolute inset-y-0 left-0 bg-linear-to-r from-cyan-400 to-blue-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-sm sm:text-base text-slate-200 mt-3 text-center font-medium">
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {Math.round(progress)}% Complete
              </span>
            </div>
          </div>

          {/* Question Card */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8 group"
          >
            <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_50px_-15px_rgba(0,0,0,0.6)] rounded-2xl overflow-hidden">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30"
                  >
                    <span className="text-white font-bold text-sm sm:text-base">
                      {currentQuestion + 1}
                    </span>
                  </motion.div>
                  <Badge
                    variant="secondary"
                    className="bg-linear-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 border-cyan-500/20 px-3 py-1.5 font-semibold shadow-lg"
                  >
                    Question
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-relaxed px-2 sm:px-0">
                  <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {question.question}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-3 sm:space-y-4">
                  {question.options.map((option, index) => {
                    const isSelected =
                      selectedAnswers[currentQuestion] === index;
                    const isCorrect = index === question.correctAnswer;
                    const showResult = showExplanation && isSelected;

                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative"
                      >
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left p-4 sm:p-5 lg:p-6 h-auto min-h-12 sm:min-h-14 rounded-xl border backdrop-blur-sm transition-all
                          ${
                            isSelected && !showExplanation
                              ? "border-cyan-400 bg-cyan-500/10 text-cyan-200 shadow-[0_0_25px_-10px_rgba(34,211,238,.6)]"
                              : showResult && isCorrect
                              ? "border-emerald-400 bg-emerald-500/10 text-emerald-200 shadow-[0_0_25px_-10px_rgba(16,185,129,.6)]"
                              : showResult && !isCorrect
                              ? "border-rose-400 bg-rose-500/10 text-rose-200 shadow-[0_0_25px_-10px_rgba(244,63,94,.6)]"
                              : "border-white/15 bg-white/5 text-slate-200 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                          }`}
                          onClick={() => selectAnswer(index)}
                          disabled={showExplanation}
                        >
                          <div className="flex items-center gap-3 sm:gap-4 w-full">
                            <motion.div
                              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 grid place-items-center text-sm sm:text-base font-bold shrink-0
                              ${
                                isSelected && !showExplanation
                                  ? "border-cyan-400 bg-cyan-600/70 text-white"
                                  : showResult && isCorrect
                                  ? "border-emerald-400 bg-emerald-600/70 text-white"
                                  : showResult && !isCorrect
                                  ? "border-rose-400 bg-rose-600/70 text-white"
                                  : "border-cyan-700 text-cyan-300 bg-slate-900/60"
                              }`}
                              whileHover={{ scale: 1.1 }}
                            >
                              {String.fromCharCode(65 + index)}
                            </motion.div>
                            <span className="flex-1 leading-relaxed text-left break-words">
                              {option}
                            </span>
                            {showResult && isCorrect && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="ml-2"
                              >
                                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                              </motion.div>
                            )}
                            {showResult && !isCorrect && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="ml-2"
                              >
                                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />
                              </motion.div>
                            )}
                          </div>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Explanation Section */}
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 sm:mb-8 group"
            >
              <Card className="relative rounded-2xl border border-emerald-400/20 bg-emerald-500/10 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(16,185,129,.5)] overflow-hidden">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30"
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-300 mb-3 sm:mb-4">
                        Correct Answer:{" "}
                        <span className="bg-emerald-400/25 px-2 py-1 rounded-lg font-bold text-emerald-100 ring-1 ring-emerald-300/30">
                          {String.fromCharCode(65 + question.correctAnswer)}
                        </span>
                      </h4>
                      <p className="text-white/95 leading-relaxed text-sm sm:text-base lg:text-lg">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
            <Button
              onClick={goToPreviousQuestion}
              variant="outline"
              disabled={currentQuestion === 0}
              className="rounded-xl border border-white/15 bg-white/5 text-slate-200 hover:text-white hover:border-slate-400/50 hover:bg-slate-700/40 disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed transition-all duration-300 py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base font-semibold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <div className="flex-1 sm:mx-4" />
            {hasSelected && !showExplanation && (
              <Button
                onClick={showAnswer}
                className="rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
              >
                Show Answer
              </Button>
            )}
            {showExplanation && (
              <Button
                onClick={goToNextQuestion}
                className="rounded-xl bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
              >
                {currentQuestion === quizQuestions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  /** ---------- FINISHED STATE ---------- */
  if (quizState === "finished") {
    const percentage = (score / quizQuestions.length) * 100;
    const scoreData = getScoreMessage(score);
    const Icon = scoreData.icon;

    return (
      <div className="min-h-dvh bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-100 antialiased overflow-hidden relative">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light"
          style={{
            backgroundImage: "radial-gradient(#fff 1px,transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500/5 rounded-full blur-2xl"
          />
        </div>

        {/* Header */}
        <header className="relative z-10 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 rounded-xl px-3 py-2"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Back to Home</span>
                </Button>
              </Link>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30 ring-1 ring-white/20">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Quiz Results
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300">
                    Your Smart City Knowledge Score
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10 min-h-[calc(100vh-200px)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-3xl mx-auto group"
          >
            <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_50px_-15px_rgba(0,0,0,0.6)] rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-6 sm:pb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30"
                >
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </motion.div>
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 font-bold">
                  Quiz Complete!
                </CardTitle>
                <div
                  className={`text-lg sm:text-xl lg:text-2xl font-semibold ${scoreData.color}`}
                >
                  {scoreData.message}
                </div>
              </CardHeader>
              <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-3 sm:mb-4"
                  >
                    {score}/{quizQuestions.length}
                  </motion.div>
                  <div className="text-sm sm:text-base lg:text-lg text-slate-300 font-medium mb-4 sm:mb-6">
                    Questions Correct
                  </div>
                  <div className="relative rounded-full bg-white/5 border border-white/10 h-4 sm:h-5 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 animate-pulse" />
                    <div
                      className="absolute inset-y-0 left-0 bg-linear-to-r from-cyan-400 to-blue-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="text-sm sm:text-base text-slate-200 mt-3 font-semibold">
                    {percentage.toFixed(0)}% Score
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 sm:p-5 lg:p-6 text-center hover:border-emerald-400/40 transition-all"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 mb-1 sm:mb-2">
                      {score}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-slate-300 font-medium">
                      Correct
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl border border-rose-400/20 bg-rose-500/10 p-4 sm:p-5 lg:p-6 text-center hover:border-rose-400/40 transition-all"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-rose-400 mb-1 sm:mb-2">
                      {quizQuestions.length - score}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-slate-300 font-medium">
                      Incorrect
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-cyan-400 text-lg sm:text-xl lg:text-2xl text-center">
                    Review Your Answers:
                  </h4>
                  <div className="grid gap-2 sm:gap-3 max-h-48 sm:max-h-64 overflow-y-auto">
                    {quizQuestions.map((question, index) => {
                      const isCorrect =
                        selectedAnswers[index] === question.correctAnswer;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.06 }}
                          className="flex items-center justify-between p-3 sm:p-4 rounded-xl border bg-white/5 backdrop-blur-lg border-white/10 hover:border-cyan-400/40 transition-all"
                        >
                          <span className="text-sm sm:text-base text-slate-200 font-medium">
                            Question {index + 1}
                          </span>
                          {isCorrect ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                              <span className="text-xs sm:text-sm text-emerald-400 font-semibold hidden sm:inline">
                                Correct
                              </span>
                            </motion.div>
                          ) : (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="flex items-center gap-2"
                            >
                              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />
                              <span className="text-xs sm:text-sm text-rose-400 font-semibold hidden sm:inline">
                                Incorrect
                              </span>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <Link href="/" className="flex-1">
                    <Button
                      variant="outline"
                      className="flex-1 rounded-xl border border-white/15 bg-white/5 text-slate-200 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all duration-300 py-3 sm:py-4 text-sm sm:text-base font-semibold"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                  <Button
                    onClick={startQuiz}
                    className="flex-1 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 sm:py-4 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-all"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}

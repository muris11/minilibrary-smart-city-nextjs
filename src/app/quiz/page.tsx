"use client";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { Progress } from "@/component/ui/progress";
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

// Quiz questions data
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
      "Smart Cities aim to enhance quality of life, sustainability, and efficiency through technology integration.",
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
      "The 6 pillars are: Smart Governance, Smart Economy, Smart Living, Smart Mobility, Smart Environment, and Smart People.",
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
      "IoT relies on networks of connected sensors and devices that collect and transmit real-time data.",
  },
  {
    id: 4,
    question:
      "In Lampung's Smart City implementation, what is the current overall progress?",
    options: ["25%", "45%", "65%", "85%"],
    correctAnswer: 2,
    explanation:
      "Lampung's Smart City projects show an average of 65% completion across active initiatives.",
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
      "Smart Mobility addresses intelligent transportation systems, traffic management, and sustainable movement.",
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
      "Smart Governance aims to make public services more transparent, efficient, and accessible to citizens.",
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
      "Big Data Analytics processes massive amounts of urban data to derive insights and optimize city operations.",
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
      "Smart Environment focuses on sustainability, resource management, and environmental monitoring.",
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
      "Bandar Lampung Smart Traffic System is one of the active projects in Lampung's Smart City implementation.",
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
      "Smart People focuses on digital literacy, education, skill development, and inclusive innovation.",
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

  if (quizState === "start") {
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
                  <Brain className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Smart City Quiz
                  </h1>
                  <p className="text-sm text-gray-400">Test Your Knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex items-center justify-center p-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl"
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader className="text-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Brain className="w-8 h-8" />
                </motion.div>
                <CardTitle className="text-3xl bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Smart City Challenge
                </CardTitle>
                <p className="text-gray-400">
                  Test your knowledge about Smart Cities and Lampung&apos;s
                  implementation
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400">10</div>
                    <div className="text-sm text-gray-400">Questions</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">10</div>
                    <div className="text-sm text-gray-400">Minutes</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">
                      Cover all 6 Smart City Pillars
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Lampung implementation specifics
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <span className="text-gray-300">
                      Technology and infrastructure concepts
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link href="/" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-gray-300"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                  <Button
                    onClick={startQuiz}
                    className="flex-1 bg-cyan-500 hover:bg-cyan-600"
                  >
                    Start Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  if (quizState === "playing") {
    const question = quizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    const hasSelected = selectedAnswers[currentQuestion] !== undefined;

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
                  <Brain className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Smart City Quiz
                  </h1>
                  <p className="text-sm text-gray-400">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-4 relative z-10">
          {/* Progress Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Badge
                variant="secondary"
                className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
              >
                <Clock className="w-4 h-4 mr-1" />
                {formatTime(timeLeft)}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-500/20 text-purple-300 border-purple-500/30"
              >
                Question {currentQuestion + 1} of {quizQuestions.length}
              </Badge>
            </div>
            <Progress value={progress} className="h-4 bg-slate-700" />
            <div className="text-sm text-gray-400 mt-2 text-center">
              {Math.round(progress)}% Complete
            </div>
          </div>

          {/* Question Card */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Card className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {currentQuestion + 1}
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                  >
                    Question
                  </Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
                  {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
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
                          className={`w-full justify-start text-left p-4 sm:p-6 h-auto transition-all duration-300 text-base sm:text-lg font-medium ${
                            isSelected && !showExplanation
                              ? "border-cyan-400 bg-cyan-500/20 text-cyan-100 shadow-lg shadow-cyan-500/25"
                              : showResult && isCorrect
                              ? "border-green-400 bg-green-500/20 text-green-100 shadow-lg shadow-green-500/25"
                              : showResult && !isCorrect
                              ? "border-red-400 bg-red-500/20 text-red-100 shadow-lg shadow-red-500/25"
                              : "border-slate-600 hover:border-cyan-400/60 text-gray-200 hover:text-white hover:bg-slate-700/50 hover:shadow-lg hover:shadow-cyan-500/10"
                          }`}
                          onClick={() => selectAnswer(index)}
                          disabled={showExplanation}
                        >
                          <div className="flex items-center gap-3 w-full">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                                isSelected && !showExplanation
                                  ? "border-cyan-400 bg-cyan-500 text-white"
                                  : showResult && isCorrect
                                  ? "border-green-400 bg-green-500 text-white"
                                  : showResult && !isCorrect
                                  ? "border-red-400 bg-red-500 text-white"
                                  : "border-gray-400 text-gray-400"
                              }`}
                            >
                              {String.fromCharCode(65 + index)}
                            </div>
                            <span className="flex-1 leading-relaxed">
                              {option}
                            </span>
                            {showResult && isCorrect && (
                              <CheckCircle className="w-5 h-5 text-green-400 ml-2" />
                            )}
                            {showResult && !isCorrect && (
                              <XCircle className="w-5 h-5 text-red-400 ml-2" />
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
              className="mb-8"
            >
              <Card className="bg-linear-to-br from-green-900/20 to-cyan-900/20 backdrop-blur-md border border-green-500/30 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-2">
                        Correct Answer:{" "}
                        {String.fromCharCode(65 + question.correctAnswer)}
                      </h4>
                      <p className="text-gray-200 leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4">
            {currentQuestion > 0 && (
              <Button
                onClick={goToPreviousQuestion}
                variant="outline"
                className="border-slate-600 text-gray-300 hover:text-white hover:border-slate-500"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
            )}
            <div className="flex-1" />
            {hasSelected && !showExplanation && (
              <Button
                onClick={showAnswer}
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
              >
                Show Answer
              </Button>
            )}
            {showExplanation && (
              <Button
                onClick={goToNextQuestion}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                {currentQuestion === quizQuestions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (quizState === "finished") {
    const percentage = (score / quizQuestions.length) * 100;
    const scoreData = getScoreMessage(score);
    const Icon = scoreData.icon;

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
                  <Brain className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Quiz Results
                  </h1>
                  <p className="text-sm text-gray-400">
                    Your Smart City Knowledge Score
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex items-center justify-center p-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl"
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Icon className="w-10 h-10" />
                </motion.div>
                <CardTitle className="text-3xl mb-2">Quiz Complete!</CardTitle>
                <div className={`text-xl ${scoreData.color}`}>
                  {scoreData.message}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">
                    {score}/{quizQuestions.length}
                  </div>
                  <div className="text-gray-400">Questions Correct</div>
                  <div className="mt-4">
                    <Progress value={percentage} className="h-4" />
                    <div className="text-sm text-gray-400 mt-2">
                      {percentage.toFixed(0)}% Score
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-400">
                      {score}
                    </div>
                    <div className="text-sm text-gray-400">Correct</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-red-400">
                      {quizQuestions.length - score}
                    </div>
                    <div className="text-sm text-gray-400">Incorrect</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-cyan-400">
                    Review Your Answers:
                  </h4>
                  {quizQuestions.map((question, index) => {
                    const isCorrect =
                      selectedAnswers[index] === question.correctAnswer;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg"
                      >
                        <span className="text-sm text-gray-300">
                          Question {index + 1}
                        </span>
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={startQuiz}
                    variant="outline"
                    className="flex-1 border-slate-600 text-gray-300"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  <Link href="/" className="flex-1">
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}

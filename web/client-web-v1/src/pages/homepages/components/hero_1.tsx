import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import CountUp from "react-countup";
import {
  FaBookOpen,
  FaSearch,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";
import { theme } from "../../../config/theme";


type Word = {
  text: string;
  color: string;
};

type Category = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

const HeroPartOne: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  const words: Word[] = [
    { text: "Adventure", color: theme.textColors.highlight },
    { text: "Knowledge", color: "text-blue-600" },
    { text: "Inspiration", color: "text-purple-600" },
    { text: "Wisdom", color: "text-teal-600" },
    { text: "Imagination", color: "text-pink-600" },
  ];

  const categories: Category[] = [
    {
      name: "Science",
      icon: <FaSearch className="text-lg" />,
      path: "/category/science",
    },
    {
      name: "History",
      icon: <FaBookOpen className="text-lg" />,
      path: "/category/history",
    },
    {
      name: "Finance",
      icon: <FaChartLine className="text-lg" />,
      path: "/category/finance",
    },
    {
      name: "Fiction",
      icon: <FaLightbulb className="text-lg" />,
      path: "/category/fiction",
    },
  ];

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      setIsMounted(false);
    };
  }, [words.length]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const wordVariants: Variants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <section
      className={`relative ${theme.background.section} py-16 md:py-24 overflow-hidden`}
    >
      <div className={`${theme.layout.containerWidth} mx-auto px-4`}>
        <motion.div
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
          variants={container}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={item}
            className={`text-4xl md:text-6xl font-bold ${theme.textColors.primary} mb-6 leading-tight`}
          >
            <span className="relative inline-block">
              <span className="relative z-10">Discover Your Next</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`absolute bottom-1 left-0 h-3 bg-opacity-30 ${
                  theme.buttonColors.primaryButton.background.split(" ")[0]
                } z-0`}
              />
            </span>
            <br />
            <div className="h-20 md:h-24 relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWordIndex].text}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={wordVariants}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${words[currentWordIndex].color}`}
                >
                  {words[currentWordIndex].text}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            variants={item}
            className={`text-lg md:text-xl ${theme.textColors.secondary} mb-8 max-w-2xl mx-auto`}
          >
            Join our community of readers exploring thousands of titles across
            all genres
          </motion.p>

          <motion.div
            variants={item}
            className="flex items-center justify-center mb-10"
          >
            <div
              className={`${theme.border.default} ${theme.shadow.button} bg-white px-6 py-3 flex items-center`}
            >
              <div
                className={`${theme.textColors.highlight} font-bold text-xl mr-2`}
              >
                <CountUp end={5000} duration={2.5} prefix="Over " suffix="+" />
              </div>
              <span className={theme.textColors.secondary}>
                books available
              </span>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-12">
            <Link
              to="/books"
              className={`inline-block ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} font-semibold px-8 py-3 ${theme.border.button} ${theme.shadow.button} transition-all duration-300 transform hover:scale-105`}
            >
              Explore Books
            </Link>
          </motion.div>

          <motion.div
            variants={container}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.div
                key={category.name}
                variants={item}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link
                  to={category.path}
                  className={`flex items-center bg-white hover:bg-sky-50 px-4 py-2 ${theme.border.button} ${theme.shadow.button} transition-all duration-300`}
                >
                  <span
                    className={`text-lg mr-2 ${theme.textColors.highlight}`}
                  >
                    {category.icon}
                  </span>
                  <span
                    className={`font-medium ${theme.textColors.secondary}`}
                  >
                    {category.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPartOne;

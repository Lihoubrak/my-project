import React, { useState, useEffect } from "react";
import { Footer, Header } from "../components";
import useDarkMode from "../hooks/useDarkMode";
import useLanguage from "../hooks/useLanguage";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, toggleLanguage } = useLanguage();
  return (
    <div
      className={`px-4 sm:px-20 py-4 sm:py-10 dark:bg-gray-800 dark:text-white min-h-screen max-w-screen`}
    >
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleLanguage={toggleLanguage}
        language={language}
      />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;

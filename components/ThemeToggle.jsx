"use client";

import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <FiSun
          className={`absolute inset-0 w-5 h-5 text-amber-500 dark:text-amber-400 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />

        {/* Moon Icon */}
        <FiMoon
          className={`absolute inset-0 w-5 h-5 text-blue-500 dark:text-blue-400 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;

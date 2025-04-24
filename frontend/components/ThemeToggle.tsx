import React from "react";
import { useThemeContext } from "../context/ThemeContext";
import styles from "../styles/ThemeToggle.module.css";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      className={styles.button}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
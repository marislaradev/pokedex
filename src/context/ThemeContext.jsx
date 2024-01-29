import React, { createContext, useContext, useState, useEffect } from "react";
import styles from "./ThemeContext.module.css";

export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme || "light";

  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeClass = theme === "light" ? styles.lightTheme : styles.darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={themeClass}>{children}</div>
    </ThemeContext.Provider>
  );
};

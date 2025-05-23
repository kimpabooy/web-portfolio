import { createContext, useContext, useEffect, useState } from "react";

// Theme contextAPI
// Global state component.
const ThemeContext = createContext();

// saves darkMode to local Storage.
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) ?? true
  );

  // Use for darkmode.
  useEffect(() => {
    const root = document.documentElement;

    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

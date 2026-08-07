import { createContext, useState } from "react";

// Create a context that will hold the shared theme state
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  // Stores whether the app is currently in dark mode
  const [darkMode, setDarkMode] = useState(true);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (

    // Make the theme state and toggle function
    // available to every child component
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
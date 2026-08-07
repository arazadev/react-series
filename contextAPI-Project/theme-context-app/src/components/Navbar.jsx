import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  // Read the current theme and the function
  // used to switch between themes
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-6 shadow-md">
      <h1 className="text-2xl font-bold">
        Theme Switcher
      </h1>

      {/* Toggle the global theme */}
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;
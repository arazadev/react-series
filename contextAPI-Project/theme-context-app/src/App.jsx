import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {

  // Access the shared theme state
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar />

      <div className="flex justify-center mt-10">
        <Card />
      </div>
    </div>
  );
}

export default App;
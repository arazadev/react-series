import { useState } from "react";

function App() {
  // State to control conditional rendering
  const [showBtn, setShowBtn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold text-cyan-400">
        Conditional Rendering in React
      </h1>

      {/* Ternary operator: renders one of two buttons */}
      {showBtn ? (
        <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold shadow-lg transition duration-300">
          showBtn is TRUE
        </button>
      ) : (
        <button className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold shadow-lg transition duration-300">
          showBtn is FALSE
        </button>
      )}

      {/* Logical AND (&&): renders only when showBtn is true */}
      {/* {showBtn && <button>showBtn is TRUE</button>} */}

      {/* Toggle the state */}
      <button
        onClick={() => setShowBtn(!showBtn)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow-lg transition duration-300 active:scale-95"
      >
        Toggle Button
      </button>
    </div>
  );
}

export default App;
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Card() {

  // Consume the shared theme state
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`mt-20 w-96 rounded-xl p-6 shadow-lg transition-all ${
        darkMode
          ? "bg-gray-800"
          : "bg-white"
      }`}
    >
      <h3 className="text-2xl font-bold">
        Context API Project
      </h3>

      <p className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure eum soluta molestias cumque laboriosam atque, eaque dolores laudantium voluptatem.
      </p>
    </div>
  );
}

export default Card;
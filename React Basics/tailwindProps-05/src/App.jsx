import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./Components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-amber-300 p-5 rounded-2xl text-black">
        Tailwind Lecture
      </h1>
      <Card username="Ali Raza" btnText="Click Me" />
      <Card username="Hussain" />
    </>
  );
}

export default App;

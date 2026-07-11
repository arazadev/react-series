import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  // ==========================
  // State
  // ==========================

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // ==========================
  // References
  // ==========================

  const passwordRef = useRef(null);

  // ==========================
  // Generate Password
  // ==========================

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (characterAllowed) {
      str += "!@#$%^&*";
    }

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  // ==========================
  // Copy Password
  // ==========================

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);

    navigator.clipboard.writeText(password);
  }, [password]);

  // ==========================
  // Generate password whenever
  // settings change
  // ==========================

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  // ==========================
  // UI
  // ==========================

  return (
    <div className="w-full max-w-md mx-auto my-8 rounded-lg bg-gray-800 px-4 py-3 text-orange-500 shadow-md">
      <h1 className="my-3 text-center text-white">
        Password Generator
      </h1>

      <div className="mb-4 flex overflow-hidden rounded-lg bg-white shadow">
        <input
          ref={passwordRef}
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          className="w-full px-3 py-1 text-blue-600 outline-none"
        />

        <button
          onClick={copyPasswordToClipboard}
          className="shrink-0 bg-blue-700 px-3 py-0.5 text-white outline-none"
        >
          Copy
        </button>
      </div>

      <div className="flex gap-x-2 text-sm">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />

          <label>Length: {length}</label>
        </div>

        <div>
          <input
            id="numberInput"
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />

          <label htmlFor="numberInput"> Number</label>
        </div>

        <div>
          <input
            id="characterInput"
            type="checkbox"
            defaultChecked={characterAllowed}
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />

          <label htmlFor="characterInput"> Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
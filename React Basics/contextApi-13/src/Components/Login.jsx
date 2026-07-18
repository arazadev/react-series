import React, { useState, useContext } from "react";
import UserContext from "../ContextAPI/UserContext";

const Login = () => {

  // Local state to store input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Get the setUser function from Context
  const { setUser } = useContext(UserContext);

  // Runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user information in Context
    setUser({ username, password });

    // Clear input fields after login
    setUsername("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg w-96"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        Login
      </h2>

      {/* Username Input */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default Login;

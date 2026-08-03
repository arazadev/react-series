import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Favorites from "./Pages/Favorites/Favorites.jsx";
import Details from "./Pages/Details/Details.jsx";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navigation bar displayed on every page */}
      <Navbar />

      <main>

        {/* Defines all application routes */}
        <Routes>

          {/* Home page - displays searched recipes */}
          <Route 
            path="/" 
            element={<Home />} 
          />

          {/* Favorites page - displays saved recipes */}
          <Route 
            path="/favorites" 
            element={<Favorites />} 
          />

          {/* Dynamic route for individual recipe details */}
          <Route 
            path="/recipe-item/:id" 
            element={<Details />} 
          />

        </Routes>

      </main>

    </div>
  );
}
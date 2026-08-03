import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter enables client-side routing

import App from "./App.jsx";
import GlobalState from "./Context/Context.jsx"; // GlobalState provides global data (recipes, favorites, search) to all components
import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>

    <BrowserRouter>

      <GlobalState>
        <App />
      </GlobalState>

    </BrowserRouter>

  </StrictMode>
);
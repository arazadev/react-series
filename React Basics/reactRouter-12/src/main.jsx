/**
 * File purpose:
 * Entry point of the React application responsible for initializing the app,
 * configuring client-side routing, and mounting the React component tree.
 *
 * Main logic:
 * Creates route definitions using React Router, including nested routes under
 * the shared Layout component, then renders the application with StrictMode.
 *
 * Gotchas:
 * The GitHub route depends on `githubInfoLoader` to fetch data before the
 * component renders. Route paths must match the navigation links used throughout
 * the application.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import User from "./Components/User/User.jsx";
import Github, { githubInfoLoader } from "./Components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

/**
 * Creates the application's route configuration.
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
      loader={githubInfoLoader}
      path='github'
      element={<Github />}
       />
    </Route>
  )
)

/**
 * Mounts the React application into the root DOM element.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
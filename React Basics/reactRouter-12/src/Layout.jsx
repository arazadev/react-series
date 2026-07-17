/**
 * File purpose:
 * Provides the shared application layout that wraps all routed pages.
 *
 * Main logic:
 * Renders global UI components such as the Header and Footer while using
 * React Router's Outlet to display the currently active child route.
 *
 * Gotchas:
 * The Outlet component depends on nested routes being configured correctly
 * in the application's router setup.
 */

import React from 'react'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

/**
 * Renders the common page structure shared across all routes.
 */
function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout 
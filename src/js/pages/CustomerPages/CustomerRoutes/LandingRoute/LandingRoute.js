import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
import { motion } from "framer-motion"

// Layout
import LandingRouteStyled from "./LandingRouteStyled"
// Route Components
import Main from "./Main/Main"

const LandingRoute = () => {
  return <LandingRouteStyled></LandingRouteStyled>
}

export default LandingRoute

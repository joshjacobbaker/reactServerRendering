import React, { useState } from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// Sections of Layout w/ Components
import CustomerChapterStyled from "./CustomerChapterStyled"

// Foundational Components
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Right from "./Right/Right"
import Main from "./Main/Main"

// Pages
import HomePage from "../CustomerChapter/pages/HomePage"

// Theme
// import theme from "../../hooks/UseTheme"

const CustomerChapter = (props) => {
  return (
    <CustomerChapterStyled>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Outlet />
      </Main>
      <Footer />
    </CustomerChapterStyled>
  )
}

export default CustomerChapter

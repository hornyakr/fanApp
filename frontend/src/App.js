import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { MainNavbar } from "./components//MainNavbar.js";
import NoPage from "./components/NoPage.js";
import SocialSideBar from "./components/SocialSideBar.js";

import { AboutScreen } from "./screens/AboutScreen";

import { HomeScreen } from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <header>
        <MainNavbar />
        <SocialSideBar />
      </header>
      <Routes>
        <Route path="/about" element={<AboutScreen />} />
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;

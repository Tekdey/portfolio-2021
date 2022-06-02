import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Work from "./pages/Work";
import Skill from "./pages/Skill";
import SkillsSmallScreen from "./pages/Skills_SmallScreen";
import About from "./pages/About";
import Tutorial from "./pages/Tutorial";
import Sound from "./components/Sound";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Sound />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/skills/smallScreen" element={<SkillsSmallScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;

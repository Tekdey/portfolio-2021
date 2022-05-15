import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
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
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;

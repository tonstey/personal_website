import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

import { MdMusicNote, MdMusicOff } from "react-icons/md";

import MenuBar from "./components/MenuBar";

function App() {
  const [muted, setMuted] = React.useState(true);
  /*
  const toggleMusic = () => {
    const music = document.getElementById("audio")
    if (music.paused && muted) {
      music.play().catch(err => {console.log(err)})
    }
    else {
      music.pause()
    }
    setMuted(self => !self)
  }
  */
  return (
    <>
      <div className="flex h-full w-full flex-col" id="app">
        <MenuBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

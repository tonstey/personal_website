import React from "react"

import { Routes, Route, useLocation } from "react-router-dom"

import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ResumePage from './pages/ResumePage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'

import { MdMusicNote, MdMusicOff } from "react-icons/md";


import './App.css'



function App() {
  const [muted, setMuted] = React.useState(true)

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

  return (
    <>
      <div className="relative" id="app">
        <Sidebar />
        {
          muted ? <MdMusicOff className="fixed top-32 right-4 text-5xl p-2 bg-white text-black border border-slate-500 rounded-full z-50 hover:cursor-pointer" onClick={toggleMusic} /> : 
                  <MdMusicNote className="fixed top-32 right-4 text-5xl p-2 bg-white text-black border border-slate-500 rounded-full z-50 hover:cursor-pointer" onClick={toggleMusic} />
        }
       

        <HomePage />
        <AboutPage />
        <ResumePage />
        <PortfolioPage />
         
     
      </div>   
    </>
  )
}

export default App

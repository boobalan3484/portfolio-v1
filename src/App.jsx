import React, { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'

import AOS from 'aos'
import "aos/dist/aos.css"

import LandingPage from "./Pages/LandingPage"
import NotFoundPage from "./Pages/NotFoundPage"

function App() {

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 800,
    })
  }, [])

  return (
    <Routes>
      <Route index path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

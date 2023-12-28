import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx"
import BigCardSection from "./components/BigCardSection.jsx"
import LittleCardSection from "./components/LittleCardSection.jsx"

function App() {
  return (
    <div className="body-bg">
      <div className="top-design"></div>
      <div className="container">
        <Header />
        <BigCardSection />
        <LittleCardSection />
      </div>
    </div>
  )
}

export default App

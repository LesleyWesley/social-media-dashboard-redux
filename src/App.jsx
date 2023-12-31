import React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx"
import BigCardSection from "./components/BigCardSection.jsx"
import LittleCardSection from "./components/LittleCardSection.jsx"

function App() {

  const [darkMode, setDarkMode] = React.useState(true)

  function toggle() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={darkMode ? "body-bg darkmode" : "body-bg"}>
      <div className="top-design"></div>
      <div className="container">
        <Header darkMode={darkMode} handleChange={toggle}/>
        <BigCardSection darkMode={darkMode}/>
        <LittleCardSection darkMode={darkMode}/>
      </div>
    </div>
  )
}

export default App

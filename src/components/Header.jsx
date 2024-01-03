import React from "react"

function Header(props) {
  return (
    <header className={props.darkMode ? "darkmode" : ""}>
      <div className="header--details-section">
          <h1>Social Media Dashboard</h1>
          <h2>Total Followers: 23,004</h2>
      </div>

      <div className="dark-mode-section">
          <h2>Dark Mode</h2>
          <div className="toggle-container">
              <input type="checkbox" className="toggle-checkbox" id="darkmode" checked={props.darkMode} onChange={props.handleChange}/>
              <label htmlfor="darkmode"></label>
              <div className="slider--container">
                  <div className={props.darkMode ? "darkmode slider--ball" : "slider--ball"}></div>
              </div>
          </div>
      </div>
    </header>
  )
}

export default Header

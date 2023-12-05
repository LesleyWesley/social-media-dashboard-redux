import React from "react"

function Header() {
  return (
    <header>
      <div className="header--details-section">
          <h1>Social Media Dashboard</h1>
          <h2>Total Followers: 23,004</h2>
      </div>

      <div className="header--dark-mode-section">
          <h2>Dark Mode</h2>
          <div className="dark-mode-toggle-container">
              <input type="checkbox" className="toggle-checkbox" />
              <div className="toggle-bg">
                  <div className="toggle-ball"></div>
              </div>
          </div>
      </div>
    </header>
  )
}

export default Header

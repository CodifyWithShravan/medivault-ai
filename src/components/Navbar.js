import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="/MediVault.AI-logo.png" alt="MediVault Logo" className="logo" />
        <h2>MediVault.AI</h2>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Profile</li>
        <li>Activity</li>
      </ul>
    </nav>
  );
}

export default Navbar;

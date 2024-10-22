import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
const navbar = () => {
  return (
    <header className="header-container">
      <div className="title-container">
        <img src="Assets/tj-logo.png" className="header-logo" />
        <h1>Team Jacob</h1>
      </div>

      <nav className="nav-container">
        <div className="nav-box">
          <NavLink to="/">Home</NavLink>
        </div>

        <div className="nav-box">
          <NavLink to="/notFound">Rosters</NavLink>
        </div>
        <div className="nav-box">
          <NavLink to="/results">Results</NavLink>
        </div>
        <div className="nav-box">
          <NavLink to="/about">About US</NavLink>
        </div>
        <div className="nav-box">
          <NavLink to="/notFound">FAQs</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default navbar;

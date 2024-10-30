import React, { useState } from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive"; // Make sure to install this

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header-container">
      <div className="title-fix">
        <div className="title-container">
          <img
            src="Assets/tj-logo.png"
            className="header-logo"
            alt="Team Jacob Logo"
          />
          <h1>Team Jacob</h1>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <span className="material-symbols--menu"></span>
        </div>
      </div>
      <div className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
        <nav className="nav-container">
          <div className="nav-box">
            <NavLink to="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </div>
          <div className="nav-box">
            <NavLink to="/rosters" onClick={closeMobileMenu}>
              Rosters
            </NavLink>
          </div>
          <div className="nav-box">
            <NavLink to="/notFound" onClick={closeMobileMenu}>
              Results
            </NavLink>
          </div>
          <div className="nav-box">
            <NavLink to="/about" onClick={closeMobileMenu}>
              About Us
            </NavLink>
          </div>
          <div className="nav-box">
            <NavLink to="/news" onClick={closeMobileMenu}>
              News
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

// File: src/components/Navbar.js
import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";
import "./Navbar.css";
import isDesktop from "../hooks/useMediaQuery"; // Import the custom hook
// Import Font Awesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // faBars for hamburger, faTimes for close
const Navbar = () => {
  // State for managing the mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <Link to="/" className="navbar-links">
            Mr. Mara
          </Link>
        </div>
        {isDesktop() ? (
          // Content for Desktop
          <div className="navbar-menu">
            <Link to="/about" className="navbar-links">
              About
            </Link>
            <Link to="/projects" className="navbar-links">
              Projects
            </Link>
            <Link to="/contact" className="navbar-links">
              Contact
            </Link>
            <Link to="/owncloud" className="navbar-links">
              Owncloud
            </Link>
          </div>
        ) : (
          <div className="mobile-navbar-menu">
            <div className="mobile-navbar-icon">
              <button
                className={`mobile-navbar-menu-icon ${
                  mobileMenuOpen ? "active" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                {/* Use FontAwesomeIcon component */}
                {mobileMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} size='2x' /> // Close icon when menu is open
                ) : (
                  <FontAwesomeIcon icon={faBars} size='2x' /> // Hamburger icon when menu is closed
                )}
              </button>
            </div>
            {/* Mobile navigation menu, conditionally rendered/styled */}
            <div
              className={`mobile-navbar-menu-list ${
                mobileMenuOpen ? "active" : ""
              }`}
            >
              <Link
                to="/about"
                className="mobile-navbar-links"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="mobile-navbar-links"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="mobile-navbar-links"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/owncloud"
                className="mobile-navbar-links"
                onClick={() => setMobileMenuOpen(false)}
              >
                OwnCloud
              </Link>
              <div className="mobile-navbar-empty"></div>{" "}
              {/* Added empty div for spacing */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Go up two levels from components// Assuming you have a CSS file for styling


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      {/* Logo and Branding */}
      <div className="brand-container">
        <img src="logo.png" alt="My Desire Salon Logo" />
        <h1 className="brand-name">My Desire Salon</h1>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="menu-toggle" 
        aria-label="Toggle navigation menu"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/contact", label: "Contact" },
            { path: "/shop", label: "Shop" },
            { path: "/booking", label: "Booking" },
            { path: "/staff", label: "Staff" }
          ].map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
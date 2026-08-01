import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/media/logo.svg";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src={logo} alt="logo" />
        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              Signup
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
          </li>

          <li>
            <Link to="/pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>
          </li>

          <li>
            <Link to="/support" onClick={() => setMenuOpen(false)}>
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
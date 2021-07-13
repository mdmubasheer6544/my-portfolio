import React from "react";
import logo from "./logo.png";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} className="logo" alt="logo.." />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutme" className="nav-link">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link">
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/education" className="nav-link">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

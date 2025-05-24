import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Switch from "react-switch";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const showDropdown = location.pathname.includes("Card");

  return (
    <div className={`Nav ${darkMode ? "navbar-dark" : "navbar-light"}`}>
      <nav className="navbar navbar-expand-lg fixed-height-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home" aria-label="Home">
            <i className="fas fa-home"></i> Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/About Us" aria-label="About Us">
                  <i className="fas fa-info-circle"></i> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services" aria-label="Services">
                  <i className="fas fa-concierge-bell"></i> Services
                </Link>
              </li>
              {showDropdown && (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="cardTypesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Card Types"
                  >
                    <i className="fas fa-id-card"></i> Card Types
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="cardTypesDropdown"
                  >
                    <li>
                      <Link
                        to="/Business Card"
                        className="dropdown-item"
                        aria-label="Business Card"
                      >
                        <i className="fas fa-briefcase"></i> Business Card
                        <span className="badge bg-primary float-end">
                          Popular
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Gym Membership Card"
                        className="dropdown-item"
                        aria-label="Gym Membership Card"
                      >
                        <i className="fas fa-dumbbell"></i> Gym Membership Card
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Student Id Card"
                        className="dropdown-item"
                        aria-label="Student ID Card"
                      >
                        <i className="fas fa-user-graduate"></i> Student ID Card
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Employee ID Card"
                        className="dropdown-item"
                        aria-label="Employee ID Card"
                      >
                        <i className="fas fa-id-badge"></i> Employee ID Card
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Event Pass Card"
                        className="dropdown-item"
                        aria-label="Event Card"
                      >
                        <i className="fas fa-calendar-alt"></i> Event Card
                        <span className="badge bg-secondary float-end">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Medical ID Card"
                        className="dropdown-item"
                        aria-label="Medical ID Card"
                      >
                        <i className="fas fa-notes-medical"></i> Medical ID Card
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link contact-us-link"
                  to="/Contact Us"
                  aria-label="Contact Us"
                >
                  <i className="fas fa-envelope"></i> Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <div className="dark-mode-toggle d-flex align-items-center">
                  <span>{darkMode ? "🌙" : "☀️"}</span>
                  <Switch
                    onChange={toggleDarkMode}
                    checked={darkMode}
                    offColor="#bbb"
                    onColor="#222"
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          transition: background-color 0.3s ease-in-out;
          position: relative;
          z-index: 1000;
        }
        .fixed-height-navbar {
          height: 60px;
        }
        .navbar-light {
          background-color: #e9ecef; /* Replace with your home page background color */
        }
        .navbar-dark {
          background-color: #212529;
          color: #d3d3d3;
        }
        .navbar-nav .nav-link {
          color: ${darkMode ? "#d3d3d3" : "#343a40"} !important;
          padding: 0.5rem 1rem;
          margin: 0;
          text-align: center;
          display: block;
          transition: color 0.3s ease;
        }
        .navbar-nav .nav-link:hover {
          color: ${darkMode ? "#ffffff" : "#007bff"} !important;
        }
        .navbar-nav .contact-us-link {
          color: ${darkMode ? "#ffffff" : "#343a40"} !important;
        }
        .navbar-nav .contact-us-link:hover {
          color: ${darkMode ? "#ffffff" : "#007bff"} !important;
        }
        .dropdown-menu {
          background-color: ${darkMode ? "#333" : "#fff"};
          border-color: ${darkMode ? "#ffffff" : "#000000"};
          border: 5px solid ${darkMode ? "#ffffff" : "#000000"}; /* Added border */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          transform: translateY(-10px);
        }
        .dropdown-menu.show {
          opacity: 1;
          transform: translateY(0);
        }
        .dropdown-item {
          color: ${darkMode ? "#d3d3d3" : "#343a40"};
          padding: 0.75rem 1.5rem;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .dropdown-item:hover {
          color: ${darkMode ? "#fff" : "#007bff"};
          background-color: ${darkMode ? "#444" : "#f8f9fa"};
        }
        .dropdown-item .badge {
          transition: opacity 0.3s ease;
        }
        .dropdown-item .badge.bg-primary {
          background-color: #007bff;
        }
        .dropdown-item .badge.bg-secondary {
          background-color: #6c757d;
        }
        .dark-mode-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        body.dark-mode {
          background-color: #2e2e2e;
          color: #d3d3d3;
        }
      `}</style>
    </div>
  );
};

export default Navbar;

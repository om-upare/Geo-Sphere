import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    setShow(!show);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          {/* Logo */}
          <div className="logo">
            <NavLink to="Geo-Sphere">
              <FaGlobeAmericas /> GeoSphere
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            <NavLink to="/Geo-Sphere" className="nav-item">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item">
              About
            </NavLink>
            <NavLink to="/country" className="nav-item">
              Country
            </NavLink>
            <NavLink to="/contact" className="nav-item">
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="hamburger-menu">
            <button onClick={handleButtonToggle} className="menu-btn">
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-menu ${show ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/Geo-Sphere"
                className="nav-item"
                onClick={() => setShow(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-item"
                onClick={() => setShow(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/country"
                className="nav-item"
                onClick={() => setShow(false)}
              >
                Country
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav-item"
                onClick={() => setShow(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

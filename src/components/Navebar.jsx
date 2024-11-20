import React from "react";
import { Link } from "react-router-dom";

import "./Navebar.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navebar = () => {
  return (
    <>
      <nav className="main-div ">
        {/* first div in nav logo */}
        <div className="logo">
          <h1>Navbar...</h1>
        </div>
        {/* secound div in nav link  */}
        <div className="menu-link">
          <ul className="menuset">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* third div in nav social media link  */}
        <div className="icons">
          <ul className="social-icon-link">
            <li>
              <a href="https://www.facebook.com/share/p/gzEwKc5BAx6H6Pfi/?mibextid=oFDknk">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="https://pk.linkedin.com/">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* // hero section */}
    </>
  );
};

export default Navebar;

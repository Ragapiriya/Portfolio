import React from "react";
import "./MobileNav.css";
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img alt="logo" className="logo" src="./Assets/images/logo.jpg" />
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>

            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>
            <li>
              <a className="menu-item">Contact me</a>
            </li>

            <button
              className="contact-btn"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/18GenFT1Cvnco8UHzR5cxdePgLVqel4P3/view?usp=sharing",
                  "_blank"
                )
              }
              rel="noreferrer"
            >
              FindMyResume
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;

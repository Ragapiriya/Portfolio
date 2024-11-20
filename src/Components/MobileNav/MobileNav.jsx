import React from "react";
import "./MobileNav.css";
const MobileNav = ({ isOpen, toggleMenu, scrollTocomponent }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img
            alt="logo"
            className="logo"
            src={`${process.env.PUBLIC_URL}/Assets/images/logo.jpg`}
          />

          <ul>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollTocomponent("hero")}
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="menu-item"
                onClick={() => scrollTocomponent("education")}
              >
                Education
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollTocomponent("certificates")}
              >
                Certificates
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollTocomponent("skills")}
              >
                Technical Proficiency
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollTocomponent("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollTocomponent("blogs")}
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollTocomponent("contact-me")}
              >
                Contact-me
              </a>
            </li>

            <button
              className="contact-btn"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1orJ26CnKSbmRP3TCfET-nW_-o6OyRd6k/view?usp=sharing",
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

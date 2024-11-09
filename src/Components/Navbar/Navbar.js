import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "../MobileNav/MobileNav";
const Navbar = ({ scrollTocomponent }) => {
  const isProduction = process.env.NODE_ENV === "production";

  const logoSrc = isProduction
    ? `${process.env.PUBLIC_URL}/Assets/images/logo.jpg`
    : "/Assets/images/logo2.jpg";

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  console.log("Environment:", process.env.NODE_ENV);
  console.log("Image Source:", logoSrc);
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            alt="logo"
            className="logo"
            src={process.env.PUBLIC_URL + "/Assets/images/logo.jpg"}
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
            </li>{" "}
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
            <li>
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
            </li>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "1rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
  
};

export default Navbar;

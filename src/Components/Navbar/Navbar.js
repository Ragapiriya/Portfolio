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
          <img alt="logo" className="logo" src={process.env.PUBLIC_URL+"/Assets/images/logo.jpg"} />
          {/* <BrowserRouter> src=''
        public\Assets\images\logo.jpg
            <ul>
                <li>
                    <a className='menu-item'>Home</a>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <a className='menu-item'>Skills</a>
                    <Link to='/skills'>Skills</Link>

                </li><li>
                    <a className='menu-item'>Projects</a>
                    <Link to='/projects'>Projects</Link>

                </li>
                <li>
                    <a className='menu-item'>Contact me</a>
                    <Link to='/contact-me'>ConactMe</Link>
                    
                </li>
                <button className='contact-btn' onClick={( )=>{}}>FindMyResume</button>

            </ul>
            
            </BrowserRouter> */}
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
                onClick={() => scrollTocomponent("edblogs")}
              >
                Education & Blogs
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
                onClick={() => scrollTocomponent("contact-me")}
              >
                Contact-me
              </a>
            </li>
            <button className="contact-btn">
              {" "}
              <a
                // href="https://drive.google.com/file/d/1-Oot4sT9kk4wocw6yxXDRDVOVVoNP-aw/view?usp=sharing"
                href="https://drive.google.com/file/d/1liKdgwDbb4n6qpg83eEu9qnZMBoAuRoA/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                FindMyResume{" "}
              </a>
            </button>
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

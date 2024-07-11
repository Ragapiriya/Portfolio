import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h1>Ragapiriya Rameshkumar</h1>
          <h3>Software Engineering Undergraduate</h3>
          <p>
            I am an aspiring software engineer third-year undergraduate studying
            at the University of Kelaniya. I am passionate about developing
            full-stack websites and have a strong foundation in Data Structures
            and Algorithms (DSA) as well as Object-Oriented Programming (OOP)
            concepts in Python. I am flexible and thrive in teamwork and
            collaboration environments. I look forward to opportunities that
            allow me to showcase and further develop both my technical and soft
            skills.
          </p>
        </div>
        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img alt="" src={process.env.PUBLIC_URL+"/Assets/images/reactNew.png"} />
            </div>
            <div className="portfolio-item">
              <img
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                src={process.env.PUBLIC_URL+"/Assets/images/myPhoto2.jpg"}
              />
              {hovered && (
                <div className="hover-message">
                  Hello, It's me RAGAPIRIYA <br></br>( • ᴗ - ) ✧<br></br>{" "}
                  Welcome to My Portfolio{" "}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="tech-icon">
              <img alt="" src={process.env.PUBLIC_URL+"/Assets/images/expressjs.png"} />
            </div>
            <div className="tech-icon"> 
              <img alt="" src={process.env.PUBLIC_URL+"/Assets/images/nodejsNew.png"} />
            </div>
            <div className="tech-icon">
              <img alt="" src={process.env.PUBLIC_URL+"/Assets/images/mongodbNew.png"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

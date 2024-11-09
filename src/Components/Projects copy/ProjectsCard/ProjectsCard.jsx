import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = ({ details }) => {
  return (
    <>
      <div className="projects-card">
        <div className="headerr">
          <h6>{details.title}</h6>
          <div className="repo">
            <a href={details.link} rel="noreferrer" target="_blank">
              <img
                src={process.env.PUBLIC_URL + "/Assets/images/medium.png"}
                alt="github"
                title="Click to visit the blog"

              />
            </a>
          </div>
        </div>

        <div className="year">{details.year}</div>
        <div className="year">{details.type}</div>
        <div className="info">
          <ul>
            {details.description.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <div className="techno"></div>
          </ul>
        </div>
        
        <ul>
          <div>
            {details.keywords.map((item) => (
              <li className="tech" key={item}>
                {item}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default ProjectsCard;

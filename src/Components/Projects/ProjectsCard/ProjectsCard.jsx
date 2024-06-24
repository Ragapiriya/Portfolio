import React from 'react'
import './ProjectsCard.css';
const ProjectsCard = ({details}) => {
  return (
    <>
         <div className="projects-card">
            <h6>{details.title}</h6>
         </div>
    </>
   

  )
}

export default ProjectsCard
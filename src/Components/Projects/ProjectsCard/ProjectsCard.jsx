import React from 'react'
import './ProjectsCard.css';

const ProjectsCard = ({details}) => {
  return (
    <>
         <div className="projects-card">
            <h6>{details.title}</h6>
            <div className='year'>{details.year}</div>
            <ul>
            {details.description.map((item)=>(
                <li key={item}>{item}</li>
              )
              )}
              
            </ul>
         </div>
    </>
   

  )
}

export default ProjectsCard
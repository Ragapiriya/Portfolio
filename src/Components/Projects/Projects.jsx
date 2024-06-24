import React from 'react'
import './Projects.css'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import { projects } from '../../utils/data';
const Projects = () => {
  return (
    <>
    <div>
     <section className='projects-container'>
        <h5>My Projects</h5>
        <div className="projects-content">
            {projects.map((item)=>
                <ProjectsCard key={item.title} details={item}/>
            )} 
            
            
        </div>
     </section>
    </div>
    </>
  )
}

export default Projects
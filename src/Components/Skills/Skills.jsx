import React from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import { dataOfSkills } from '../../utils/data'

const Skills = () => {
  return (
   <>
   <section className='skills-container'>
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
            <div className="skills">
                {dataOfSkills.map((skill)=>(
                    <SkillCard
                    key={skill.title}
                    iconUrl={skill.icon}
                    title={skill.title}
                    
                    />
                ))}
            </div>
            <div className="skills-info">

            </div>

        </div>




   </section>
   </>
  )
}

export default Skills
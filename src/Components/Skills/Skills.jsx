import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import { dataOfSkills } from '../../utils/data'
import SkillsInforCard from './SkillsInfoCard/SkillsInforCard'

const Skills = () => {

    const [selectedSkill,setSelectedSkill]=useState(dataOfSkills[0]);
    const handleSelectSkill=(data)=>{
        setSelectedSkill(data);
    }


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
                    isActive={selectedSkill.title === skill.title}
                    onClick={()=>{
                        handleSelectSkill(skill);
                    }}
                    
                    />
                ))}
            </div>
            <div className="skills-info">
                <SkillsInforCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                
                />
            </div>
        </div>
   </section>
   </>
  )
}

export default Skills
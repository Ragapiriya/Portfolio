import React, { useState } from 'react'
import './Hero.css';

const Hero = () => {
  const [hovered,setHovered]=useState(false);
  
  const handleMouseEnter = ()=>{
    setHovered(true);
  }
  const handleMouseLeave = ()=>{
    setHovered(false);
  }
  return (
    <>
    <section className='hero-container'>
        <div className='hero-content'>
            <h1>Ragapiriya Rameshkumar</h1>
            <p>Passionate towards frontend Development.Certainly! Here's a sample paragraph:

The sun dipped below the horizon, casting a warm orange glow across the tranquil lake. Reflecting the sky's hues, the water shimmered with a gentle ripple, as if holding onto the day's last light. Trees on the distant shore stood sentinel, their leaves rustling softly in the evening breeze. A lone boat drifted lazily, its oars resting as its occupant gazed thoughtfully at the changing colors. Night approached slowly, wrapping the scene in a peaceful embrace, promising stars and whispers of distant waves as the world settled into a quiet, contemplative stillness.</p>
        </div>
       <div className='hero-img'>
          <div>
                <div className='tech-icon'>
                <img src='./Assets/images/reactNew.png'/>
                 
                </div>
                <div className="portfolio-item">
                  <img  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  src='./Assets/images/myPhoto2.jpg'/>
                  {hovered && <div className='hover-message'>Hello, It's me RAGAPIRIYA <br></br>( • ᴗ - ) ✧<br></br> Welcome to My Portfolio </div>}
                </div>
 
          </div>
          <div>

                <div className='tech-icon'>
                    <img src='./Assets/images/expressjs.png'/>
                </div>
                <div className='tech-icon'>
                    <img src='./Assets/images/nodejsNew.png'/>
                </div>
                <div className='tech-icon'>
                    <img src='./Assets/images/mongodbNew.png'/>
                </div>

          </div>
        </div> 
    </section></>
  )
}

export default Hero;
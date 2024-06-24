import React from 'react'
import './Hero.css';

const Hero = () => {
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
                <img src='./Assets/images/myPhoto2.jpg'/>

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
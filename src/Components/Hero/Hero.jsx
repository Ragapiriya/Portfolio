import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <>
    <section className='hero-container'>
        <div className='hero-content'>
            <h1>Ragapiriya Rameshkumar</h1>
            <p>Passionate towards frontend Development.</p>
        </div>
       <div className='hero-img'>
          <div>
                <div className='tech-icon'>
                <img src='./Assets/images/reactNew.png'/>
                 
                </div>
                <img src='./Assets/images/myPhoto.jpg'/>

          </div>
          <div>

                <div className='tech-icon'>
                    <img src='./Assets/images/reactNew.png'/>
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
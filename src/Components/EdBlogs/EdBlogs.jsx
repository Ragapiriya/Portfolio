import React from 'react'
import './EdBlogs.css';
import Blogs from './Blogs/Blogs';
import Education from './Education/Education';

const EdBlogs = () => {
  return (
    <>
    <section className='edblogs-container'>
        
        
            <div >
                <Education/>
            </div>
            <div >
                <Blogs/>
            </div>

        

    </section>
    </>
  )
}

export default EdBlogs
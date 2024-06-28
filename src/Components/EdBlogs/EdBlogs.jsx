import React from 'react'
import './EdBlogs.css';
import Blogs from './Blogs/Blogs';
import Education from './Education/Education';
const EdBlogs = () => {
  return (
    <>
    <section className='edblogs-container'>
        <h5>Education and Blogs</h5>
        <div className="edblogs-content">
            <div style={{flex:1}}>
                <Education/>
            </div>
            <div style={{flex:1}}>
                <Blogs/>
            </div>

        </div>

    </section>
    </>
  )
}

export default EdBlogs
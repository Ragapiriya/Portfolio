import React from 'react'
import './Blogs.css'
const Blogs = () => {
  return (
    <>
    <div className="blogs-info">
    <h6>Medium Blogs</h6> 
      <div className="blogs-info-content">
        <div className="header">
        <h7>Software Licenses</h7>
        <div className="medium">
          <a href="https://medium.com/@r2001piriya/software-licenses-688eab7ab1e5" rel="nonreferrer" target='_blank'>
            <img src={process.env.PUBLIC_URL + "/Assets/images/medium.png"} alt="medium" />
          </a>
        </div>
        </div>
       <br></br>
       <h9>It is a document or an agreement that legally permits the users to use and distribute the software. It is given by the company or organization who is the owner or developer of the software product.</h9>
      </div>
      </div></>
  )
}

export default Blogs
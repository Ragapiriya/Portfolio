import React from 'react'
import './ContactInfoCard.css';
const ContactInfoCard = ({iconUrl,text,href}) => {
  return (
    <div className='contact-details-card'>
        <div className="icon">
            <img src={iconUrl} alt="{text}" />
        </div>
        { {href} ? <a href={href} target='_blank' rel="noreferrer">{text}</a> :<p>{text}</p> }
        
    </div>
  )
}

export default ContactInfoCard
import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
const ContactMe = () => {
  return (
    <>
    <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard
                //email
                iconUrl="./assets/images/email2.png"
                text="rpriyasmail@gmail.com" />
                <ContactInfoCard
            //phone number
                iconUrl="./assets/images/phone2.png"
                text="+94770567384" />
                <ContactInfoCard
            // linkedin
                iconUrl="./assets/images/linkedin.png"
                text="Ragapiriya Rameshkumar" />
                <ContactInfoCard
            //github
                iconUrl="./assets/images/github.png"
                text="Ragapiriya" />
            </div>
           
            <div style={{flex:1}}>
                <ContactForm/>
            </div>

        </div>
    </section></>
  )
}

export default ContactMe
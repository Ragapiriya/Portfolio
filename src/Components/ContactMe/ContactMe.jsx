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
                iconUrl="./Assets/images/email2.png"
                text="rpriyasmail@gmail.com" 
                // href="mailto:r2001piriya@gmail.com"
                />
                <ContactInfoCard
                                    //phone number
                iconUrl="./Assets/images/phone2.png"
                text="Whatsapp: +94770567384" 
                href="https://wa.me/+94770567384"/>
                <ContactInfoCard
                                    // linkedin
                iconUrl="./Assets/images/linkedin.png"
                text="Ragapiriya Rameshkumar" 
                href="https://www.linkedin.com/in/ragapiriya-rameshkumar/"
                />

                <ContactInfoCard
                    //github
                iconUrl="./Assets/images/github.png"
                text="Ragapiriya" 
                href="https://github.com/Ragapiriya"
                
                />
            </div>
           
            <div style={{flex:1}}>
                <ContactForm/>
            </div>

        </div>
    </section></>
  )
}

export default ContactMe
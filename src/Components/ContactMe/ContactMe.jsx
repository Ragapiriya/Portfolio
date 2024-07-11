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
                iconUrl={process.env.PUBLIC_URL + "/Assets/images/email2.png"}
              

                text="rpriyasmail@gmail.com" 
                // href="mailto:r2001piriya@gmail.com"
                />
                <ContactInfoCard
                                    //phone number
                iconUrl={process.env.PUBLIC_URL + "/Assets/images/phone2.png"}

                text="Whatsapp: +94770567384" 
                href="https://wa.me/+94770567384"/>
                <ContactInfoCard
                                    // linkedin
                iconUrl={process.env.PUBLIC_URL + "/Assets/images/linkedin.png"}

                text="Ragapiriya Rameshkumar" 
                href="https://www.linkedin.com/in/ragapiriya-rameshkumar/"
                />

                <ContactInfoCard
                    //github
                iconUrl={process.env.PUBLIC_URL + "/Assets/images/github.png"}

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
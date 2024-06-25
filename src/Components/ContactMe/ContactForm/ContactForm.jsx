import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from 'emailjs-com';

const ContactForm = () => {

  const [firstname,setFirstname]=useState();
  const [lastname,setLastname]=useState();
  const [email,setEmail]=useState();
  const [message,setMessage]=useState();

  const YOUR_SERVICE_ID = "service_wnwf33r";
  const YOUR_TEMPLATE_ID = "template_g4zqkzn";
  const YOUR_USER_ID = "XP5RL1Wh8OtVDNlwX";
  const handleSubmit = (e) => {
            e.preventDefault();
          
            // Send email using EmailJS
            emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {
              from_name: firstname + lastname,
              from_email: email,
              message: message
            }, YOUR_USER_ID)
            .then((response) => {
              console.log('Email sent!', response.status, response.text);
              // Optionally: Show success message to user
            }, (error) => {
              console.error('Failed to send email. Error:', error);
              // Optionally: Show error message to user
            });
          
            // Clear form fields if needed
            setFirstname('');
            setLastname('');
            setEmail('');
            setMessage('');
  };
  return (
    <>
      <div className="contact-form-content">
        <form action="">
          <div className="name-container">
            <input type="text" name="firstname"value={firstname} placeholder="First Name" onChange={(e)=>setFirstname(e.target.value)}/>
            <input type="text" name="lastname" value={lastname} placeholder="Last Name" onChange={(e)=>setLastname(e.target.value)}/>
          </div>
          <input type="text" name="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          <textarea
            type="text"
            name="message"
            id=""
            placeholder="Message"
            rows={3} 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          <button onClick={handleSubmit}>SEND MAIL</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wqgk8vf', 'template_pa4w379', form.current, 'U0yaErYpcP3hZrNCh')
      .then((result) => {
          console.log("Email Was Sent");
          setIsEmailSent(true);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div> 
        <form ref={form} onSubmit={sendEmail}>
            <div className='m-auto flex flex-col w-5/12 justify-center'>
                <label className='text-white'>Name</label>
                <input type="text" name="name" placeholder='Your Name' required/>
                <label className='text-white'>Email</label>
                <input type="email" name="email" placeholder='Your Email' required/>
                <label className='text-white'>Message</label>
                <textarea className='resize-vertical h-3/4' name="message" placeholder='Enter Message' required/>
                <div className='text-white'>
                {isEmailSent ? (
                    <p>Thank you for your message!</p>
                ) : (
                    <input className='mt-3 px-3 py-1 rounded-md text-center bg-purple hover:bg-white hover:text-purple transition duration-300 ease-in-out' type="submit" value="Send Email"/>
                )}
                </div>
            </div>
        </form>
    </div>
  );
};
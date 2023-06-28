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
    <div className='flex justify-center items-center w-full h-full'>
        <div className='flex justify-around items- w-full'>
            <div className='w-4/12'>
                <h2 className='text-5xl text-left underline decoration-purple underline-offset-8 text-white mb-8'>Contact Me</h2>
                <p className='text-left text-white text-2xl semiBold'>
                    Feel free to contact me if you want to connect, collaborate with me, or have any questions about my work.
                </p>
                <p className='mt-5 text-left text-white text-2xl semiBold'>
                    You can also directly email me at matthew.herradura@gmail.com. Leave me a message
                    and I will get back to you as soon as I can!
                </p>
            </div>
            <div className='w-5/12'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='m-auto flex flex-col w-full justify-center'>
                        <label className='text-white text-xl text-left bold'>Name</label>
                        <input className='p-1 mb-3 rounded-sm border border-gray-300 focus:border-purple' type="text" name="name" placeholder='Your Name' required/>
                        <label className='text-white text-xl text-left bold'>Email</label>
                        <input className='p-1 mb-3 rounded-sm border border-gray-300 focus:border-purple' type="email" name="email" placeholder='Your Email' required/>
                        <label className='text-white text-xl text-left bold'>Message</label>
                        <textarea className='p-1 mb-3 resize-vertical h-40 rounded-sm' name="message" placeholder='Enter Message' required/>
                        <div className='text-white'>
                        {isEmailSent ? (
                            <p>Thank you for your message!</p>
                        ) : (
                            <input className='bold text-xl mt-3 px-3 py-1 rounded-md text-center bg-purple hover:bg-white hover:text-purple transition duration-300 ease-in-out' type="submit" value="Send Email"/>
                        )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};
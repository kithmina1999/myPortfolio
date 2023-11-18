import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


function ContactMe() {
   
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ytkp5qm", "template_seezpfx", form.current, "RQaOc2e_sbH0Joow9")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>

      <div className='min-h-[100vh]'>
      <div className='text-center pt-[15vh]  lg:pb-[2vh] '>
          <p className='font-poppins font-bold text-3xl'>Contact Me</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='container mx-auto lg:max-w-6xl flex flex-col p-10  rounded-lg mt-[5vh] lg:h-[65vh]  bg-opacity-50 bg-secondory-color'>
            <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
            <input name='user_name' type='text' placeholder='your name...' id='name' className=' border  text-gray-900 lg:text-sm md:w-full rounded-lg p-2.5 focus:border-accent mb-5' required/>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
            <input name='user_email' type='email' placeholder='your email...' id='email' className=' border  text-gray-900 lg:text-sm md:w-full rounded-lg p-2.5 focus:border-accent mb-5' required/>
            <label htmlFor="subject" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Subject</label>
            <input name='subject' type='text' placeholder='subject...' id='subject' className=' border  text-gray-900 lg:text-sm md:w-full rounded-lg p-2.5 focus:border-accent mb-5' required/>
            <label htmlFor="message" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Message</label>
            <textarea name='message' type="text" id='message' className=' border  text-gray-900 lg:text-sm md:w-full rounded-lg p-2.5 focus:border-accent ' rows={6} placeholder='your message...' required/>

            <button className="text-white bg-primary-color hover:bg-accent mx-auto rounded-xl lg:px-20  lg:p-5 py-2 px-10 lg:text-xl text-base mt-5" type='submit' >Submit&nbsp;&nbsp; <i className='uil uil-message mr-1'></i></button>
      </div>
      </form>
      
    </div>
    </section>
    
  )
}

export default ContactMe

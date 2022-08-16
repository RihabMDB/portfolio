import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0iy0hif', 'template_3la3nyw', form.current, 'JP2oXwDmu78v11Zth')
      .then((result) => {
          console.log(result.text);
          alert('Your message sent with success')
      }, (error) => {
          console.log(error.text);
      });
  };
  
    return (
       <div className="md:w-1/2  sm:w-auto mx-auto  mt-24" id="contact">
         
      <div className=" flex justify-center align-items items-center pb-24 lg:px-24">
       <form   name="contact" ref={form} onSubmit={sendEmail} className="">
            <h2 class="text-center pb-24 text-4xl font-semibold uppercase text-rose sm:text-5xl lg:text-6xl"> 
            Contact me
            </h2> 
            <p className="leading-relaxed mb-5">
             I’m interested in freelance opportunities, especially ambitious projects. However, if you need any help or you have any request or question, don’t hesitate to use the form.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ">
              Send message !
            </button>
          </form>

      </div> 
    </div>
    );

}
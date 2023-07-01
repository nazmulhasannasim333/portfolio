import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import { FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const field = e.target;

    emailjs.sendForm('service_vbkgzay', 'template_lgpn23f', form.current, 'nLafRlMZnyS5qo4-_')
      .then((result) => {
          console.log(result);
          field.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col lg:w-4/6 w-full flex-1 gap-5">
            <input name="from_name" type="text" placeholder="Your Name" required />
            <input name="from_email" type="Email" placeholder="Your Email Address" required />
            <textarea name="message" placeholder="Your Message" required rows={6}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col lg:w-2/6 w-full  gap-7 ">
              <div
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3rem]  text-2xl min-h-[3rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <MdOutlineMail />
                </div>
                <p className="md:text-base text-sm  break-words">
                  mdnasimhosen333@gmail.com
                </p>
              </div>
              <div
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3rem]  text-2xl min-h-[3rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <FaPhone />
                </div>
                <p className="md:text-base text-sm  break-words">
                  +880 1722142333
                </p>
              </div>
              <div
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3rem]  text-2xl min-h-[3rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <FaMapMarkedAlt />
                </div>
                <p className="md:text-base text-sm  break-words">
                  Pabna Shadar, Pabna, Bangladesh.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

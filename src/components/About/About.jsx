import React, { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import resume from '../../assets/Md Nasim Hosen - Mern stack developer.pdf';
import aboutImg from "../../assets/nasim2.png";

const About = () => {
const [countOn, setCountOn] = useState(false);

  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "12" },
    { text: "Companies Work", count: "01" },
  ];
  return (
   <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
     <section id="about" className="lg:py-40 py-10 text-white">
      <div className="text-center ">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse mt-10 items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center " data-aos="fade-right"
              >
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-900 rounded-xl"
              />
            </div>
          </div>
          <div className="p-2 " data-aos="fade-left">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              With 1 years of learning experience in web development, I have a strong foundation in the MERN stack development and have successfully delivered multiple projects using these technologies.  I have a solid foundation in JavaScript and its frameworks, which allows me to create dynamic and interactive user interfaces with React.js, On the server side, I used Node.js and Express.js to develop scalable and efficient backend APIs, integrating them with MongoDB for storing data.
              <br />
              During my previous roles, I have completed MERN stack web development with programming hero “Complete web development course”, and I completed some projects, also I have collaborated closely with cross-functional teams and completed some team projects.

              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        {countOn && <CountUp start={250} end={content.count} delay={0} />}
                    
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={resume} download>
                <button className="btn-primary">Download Resume</button>
              </a>
            </div>
          </div>
         
        </div>
      </div>
    </section>
   </ScrollTrigger>
  );
};

export default About;

import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import hero from "../../assets/nasimvai.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Front End Developer"],
    loop: 0,
  });

  return (
    <section
      id="home"
      className=" max-w-5xl lg:mt-32 mt-12 mx-auto flex lg:gap-0 gap-4 py-20 md:flex-row flex-col items-center"
    >
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Nasim</span>
          </h1>
          <h4 className="md:text-4xl text-lg md:leading-normal leading-5 mt-4 font-bold ">
            I am{" "}
            <span className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-cyan-600">
              {text}
            </span>
          </h4>
          <a href="#contact"><button className="btn-primary mt-8">Contact Me</button></a>
          
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <a href="https://www.linkedin.com/in/Nazmulhasannasim333/" target='_blank'>
              <FaLinkedin className="text-gray-600 hover:text-white cursor-pointer" />
            </a>
            <a href="https://github.com/nazmulhasannasim333" target='_blank'><FaGithub className="text-gray-600 hover:text-white cursor-pointer" /></a>
            <a href="https://twitter.com/NHnasim333" target='_blank'><FaTwitter className="text-gray-600 hover:text-white cursor-pointer" /></a>
            <a href="https://www.instagram.com/nazmulhasannasim333/" target='_blank'><FaInstagram className="text-gray-600 hover:text-white cursor-pointer" /></a>  
            <a
              href="https://www.facebook.com/nazmulhasannasim333"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-gray-600 hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center " data-aos="fade-right"
              >
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm heroImg ">
              <img
                src={hero}
                alt=""
                className="w-full object-cover bg-cyan-900 rounded-full"
              />
            </div>
          </div>
    </section>
  );
};

export default Hero;

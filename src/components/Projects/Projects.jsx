import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../assets/images/portfolio1.png";
import project2 from "../../assets/images/portfolio2.png";
import project3 from "../../assets/images/portfolio3.png";
import "./Project.css";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    backgroundColor: "#0f172b",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const projects = [
    {
      img: project1,
      name: "Teaching.Ing - Language Learning School(MERN Stack)",
      github_client: "https://github.com/nazmulhasannasim333/teaching-client",
      github_server: "https://github.com/nazmulhasannasim333/teaching-server",
      live_link: "https://teaching-lng.web.app/",
      featues: [
        "On this site, I use Firebase authentication and use the private route for authenticating users,also use admin private route and instructor private route for authenticating them.",
        "On this project, I use React Router for setup routing, Tailwind and DaisyUI for design.",
        "I opted to use some React packages Moment Js, React hook form,Image-zoom, Sweetalert2.",
      ],
    },
    {
      img: project2,
      name: "DollDroid - Doll Toy Marketplace(MERN Stack)",
      github_client: "https://github.com/nazmulhasannasim333/dollDroid",
      github_server: "https://github.com/nazmulhasannasim333/dollDroid-server",
      live_link: "https://doll-droid.web.app/",
      featues: [
        "On this site, I use the Firebase Login system and use the private route for user authentication.",
        "On this site, I use Axios for fetching data, and use the React AOS package for animate components.",
        "I opted to utilize react awesome components, and use react-image-modal, react-rating.",
      ],
    },
    {
      img: project3,
      name: "ChefLegend - Recipe and Chef(Front-end)",
      github_client: "https://github.com/nazmulhasannasim333/chefLegend",
      github_server: "https://github.com/nazmulhasannasim333/chefLegend-server",
      live_link: "https://chef-legend-project.web.app/",
      featues: [
        "On this site, I use Firebase authentication and use the private route for authenticating users.",
        "On this site, I implement Dark mood, and use Tailwind CSS & DaisyUI for style web pages.",
        "I used some react awesome components for interactive web pages, react icons, sweetalert2.",
      ],
    },
  ];

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="max-w-4xl mx-auto">
          <div className=" overflow-hidden rounded shadow-sm ">
            <div className="flex flex-col pt-5 lg:flex-row sm:mx-auto">
              <div className=" lg:w-2/5 h-full px-2 py-2 detail-img">
                <img
                  src={selectProject?.img}
                  alt="book cover"
                  className="object-cover w-full  lg:h-full "
                />
              </div>
              <div className=" px-8 lg:pt-0 pt-8 lg:w-3/5">
                <p className="font-semibold text-3xl ">{selectProject?.name}</p>{" "}
                <p className=" text-xl pt-4">
                  Features: <br />
                  </p>
                  <ul className="list-disc px-4 font-Poppins sm:text-sm text-xs !leading-7">
                    {selectProject?.featues.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                
                <div className="flex gap-3 my-5">
                  <a
                    href={selectProject?.live_link}
                    target="_blank"
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    Live Site
                  </a>
                  <a
                    href={selectProject?.github_client}
                    target="_blank"
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    Github-Client
                  </a>
                  <a
                    href={selectProject?.github_server}
                    target="_blank"
                    className="text-cyan-600 bg-gray-800 px-1 py-1 inline-block"
                  >
                    Github-Server
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="border py-1 px-3 font-semibold text-black bg-white"
          >
            Close
          </button>
        </div>
      </Modal>
      <section id="projects" className="pt-24 pb-14 text-white">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            My <span className="text-cyan-600">Projects</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
        </div>
        <br />
        <div className="flex max-w-6xl gap-6  mx-auto my-6 items-center relative">
          <div className="lg:w-full w-full">
            <Swiper
              style={{ zIndex: "0" }}
              slidesPerView={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div
                    onClick={() => {
                      setSelectProject(project_info);
                      openModal();
                    }}
                    className="h-fit w-full p-4 bg-slate-700 rounded-xl cursor-pointer"
                  >
                    <img
                      src={project_info.img}
                      alt=""
                      className="rounded-lg project-img"
                    />
                    <div className=" bg-black bg-opacity-80 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 ">
                      <div className="text-center mt-32">
                        <button className="py-1 px-3 bg-cyan-700 text-white border border-cyan-400 rounded-full">
                          Show Project
                        </button>
                      </div>
                    </div>
                    <h3 className="text-xl my-4">{project_info?.name?.split('-')[0]}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

// import images

import bootstrap from "./assets/Skills/bootstrap.png";
import canva from "./assets/Skills/canva.png";
import css from "./assets/Skills/css3.png";
import expressjs from "./assets/Skills/expressjs.png";
import figma from "./assets/Skills/figma.png";
import firebase from "./assets/Skills/firebase.png";
import html from "./assets/Skills/html5.png";
import mongodb from "./assets/Skills/mongodb.png";
import nodejs from "./assets/Skills/node.png";
import reactjs from "./assets/Skills/react.png";
import tailwind from "./assets/Skills/tailwind.png";
import vscode from "./assets/Skills/vscode.png";

import { BiUser } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { RiProjectorLine, RiServiceLine } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#about",
      icon: BiUser,
    },
    {
      link: "#skills",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],

  skills: [
    {
      name: "React js",
      para: "React.js is a powerful JavaScript library for building user interfaces with component-based architecture.",
      logo: reactjs,
    },

    {
      name: "Node js",
      para: "Node.js is a runtime environment that allows server-side JavaScript execution.",
      logo: nodejs,
    },
    {
      name: "Express js",
      para: "Express.js is a minimalistic and flexible web application framework for Node.js.",
      logo: expressjs,
    },
    {
      name: "MongoDB",
      para: "MongoDB is a scalable and flexible NoSQL database that stores data in JSON.",
      logo: mongodb,
    },
    {
      name: "HTML5",
      para: "HTML is the standard markup language for creating the structure and content of web pages.",
      logo: html,
    },

    {
      name: "CSS3",
      para: "CSS is a styling language used to describe the presentation and visual appearance of HTML elements.",
      logo: css,
    },
    {
      name: "Tailwind CSS",
      para: "Tailwind CSS is a utility-first CSS framework that provides a wide range of pre-built classes.",
      logo: tailwind,
    },
    {
      name: "Bootstrap",
      para: "Bootstrap is a popular front-end framework that collection of pre-designed components.",
      logo: bootstrap,
    },
    {
      name: "Firebase",
      para: " Firebase is a comprehensive backend-as-a-service platform by Google that offers a suite services",
      logo: firebase,
    },
    {
      name: "VS Code",
      para: "VS Code is a feature-rich source code editor that supports multiple programming languages.",
      logo: vscode,
    },
    {
      name: "Figma",
      para: "Figma is a collaborative and cloud-based design tool that empowers teams to create.",
      logo: figma,
    },
    {
      name: "Canva",
      para: "Canva is a user-friendly graphic design platform that enables users to create professional-looking designs.",
      logo: canva,
    },
  ],
};

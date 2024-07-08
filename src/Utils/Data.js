// avatar
import Boobalan3484 from '../assets/Boobalan3484.pdf'
import logo from '../assets/Layer 1.svg'

// Social icons
import { FaWhatsapp, FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaTelegram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

// skill logos
import bootstrap from '../assets/skill_icons/bootstrap.svg'
import bulma from '../assets/skill_icons/bulma.svg'
import canva from '../assets/skill_icons/canva.svg'
import css3 from '../assets/skill_icons/css3.svg'
import express from '../assets/skill_icons/express1.svg'
import figma from '../assets/skill_icons/figma.svg'
import firebase from '../assets/skill_icons/firebase.svg'
import github from '../assets/skill_icons/github.svg'
import html5 from '../assets/skill_icons/html5.svg'
import javascript from '../assets/skill_icons/javascript.svg'
import mongodb from '../assets/skill_icons/mongodb.svg'
import node from '../assets/skill_icons/node.svg'
import photoshop from '../assets/skill_icons/photoshop.svg'
import react from '../assets/skill_icons/react.svg'
import reactNative from '../assets/skill_icons/native.svg'
import tailwind from '../assets/skill_icons/tailwind.svg'

// project background images
import form from '../assets/projects_bg/form.png'
import fruitshop from '../assets/projects_bg/fruitshop.png'
import portfolio from '../assets/projects_bg/portfolio.png'
import socialPost from '../assets/projects_bg/socialPost.png'
import todolist from '../assets/projects_bg/todolist.png'
import bohar from '../assets/projects_bg/bohar.png'
import ogani from '../assets/projects_bg/ogani.png'
import admin from '../assets/projects_bg/admin-crud.png'

// education logos
import elc from '../assets/institutions_logos/ELC.svg'
import ngp from '../assets/institutions_logos/NGPASC.jpeg'

// certification logos
import udemy from '../assets/certificate_logos/udemy.svg'
import coursera from '../assets/certificate_logos/coursera.svg'
// import cisco from './assets/certificate_logos/cisco.png'
// import ictAcademy from './assets/certificate_logos/ict-academy.png'

export const data = {

    brand: {
        name: "boobalan",
        profession: ["full stack web developer"],
        // profession: ["full stack web developer", "freelance developer", "react developer", "front-end web developer"],
        tagline: "I build pixel-perfect, engaging, and accessible digital experiences."
    },

    nav: [
        {
            name: "about",
            link: "about",
        },
        {
            name: "experience",
            link: "experience",
        },
        {
            name: "expertise",
            link: "expertise",
        },
        {
            name: "projects",
            link: "projects",
        },
        {
            name: "certification",
            link: "certification",
        }
    ],

    resume: {
        title: 'View Full Résumé',
        link: Boobalan3484
    },

    social_media: [
        {
            name: "Mail",
            icon: SiGmail,
            link: "mailto:boobalan3484@gmail.com",
            color: "hover:text-[#EA4335] px-[1.4px] hover:bg-white",
            radius: 'rounded-[2px]'
        },
        {
            name: 'Telegram',
            icon: FaTelegram,
            link: "https://telegram.me/boobalan_advik",
            color: "hover:text-[#229ED9] p-[1px] hover:bg-white",
            radius: 'rounded-full'

        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/boobalan-nagarajan-b3484n",
            icon: FaLinkedin,
            color: "hover:text-[#0e76a8] hover:bg-white ",
            radius: 'rounded-[2.4px]',
        },
        {
            name: "GitHub",
            link: "https://github.com/boobalan3484",
            icon: FaGithub,
            color: "hover:text-[#171515] p-[1px] hover:bg-white",
            radius: 'rounded-full'

        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/_boobalan_advik_/",
            icon: FaInstagram,
            color: "hover:text-white hover:bg-pink-600",
            radius: 'rounded-[7px]'

        }
        // {
        //     name: "Facebook",
        //     link: "https://www.facebook.com/boobalan.advik.202001",
        //     icon: FaFacebook,
        //     color: "hover:text-[#0165E1] p-[1px] hover:bg-white ",
        //     radius: 'rounded-full '
        // }
    ],

    skills: {
        nav: 'expertise',
        expertise: [
            {
                name: "HTML5",
                logo: html5
            },
            {
                name: "CSS3",
                logo: css3
            },
            {
                name: "JavaScript",
                logo: javascript
            },
            {
                name: "React",
                logo: react
            },
            {
                name: "React Native",
                logo: reactNative
            },
            {
                name: "Node",
                logo: node
            },
            {
                name: "Express",
                logo: express
            },
            {
                name: "MongoDB",
                logo: mongodb
            },
            {
                name: "Tailwind",
                logo: tailwind
            },
            {
                name: "Bootstrap",
                logo: bootstrap
            },
            {
                name: "Bulma",
                logo: bulma
            },

            {
                name: "Figma",
                logo: figma
            },
            {
                name: "Canva",
                logo: canva
            },
            {
                name: "Photoshop",
                logo: photoshop
            },
            {
                name: "GitHub",
                logo: github
            },
            {
                name: "FireBase",
                logo: firebase
            }
        ]
    },

    works: {
        nav: 'projects',
        project: [
            {
                title: 'Business Landing Page',
                description: 'I created a portfolio app that showcases my personal and professional achievements, skills, and projects.',
                tech: ['React', 'Tailwind CSS', 'Firebase'],
                url: "https://boharkaratetrainingschool.com",
                image: bohar
            },
            {
                title: 'Admin Module - CRUD App',
                description: 'I designed and implemented a streamlined and user-friendly admin module. Integrated with Node.js, Express and MongoDB, the form ensures efficient data handling and seamless communication between admin and the server.',
                tech: ['Vite + React', 'Tailwind CSS', 'Node', 'Express', 'MongoDB'],
                url: "https://boharkaratetrainingschool.com",
                image: admin
            },
            {
                title: 'Online Grocerite Store',
                description: 'I created a android mobile app ',
                tech: ['Expo + React Native', 'Redux', 'MongoDB'],
                url: "https://boharkaratetrainingschool.com",
                image: ogani
            },
            {
                title: 'Portfolio Website',
                description: 'I created a portfolio app that showcases my personal and professional achievements, skills, and projects.',
                tech: ['Vite + React', 'Tailwind CSS'],
                url: "https://github.com/boobalan3484/portfolio",
                image: portfolio
            },
            {
                title: 'To-Do List',
                description: 'I developed a to do list web app that allows users to create, read, update, and delete tasks. The app uses React & local storage to store the tasks, provides features such as filtering & searching.',
                tech: ['React', 'Node', 'Express', 'MongoDB'],
                url: "https://github.com/boobalan3484/todo-list",
                image: todolist
            },
            {
                title: 'Social Media Post',
                description: 'I developed a web app that allows users to create, edit, and delete social media posts. The app uses React and Local database that provides features such as filtering, and searching.',
                tech: ['React', 'Node', 'Express', 'MongoDB'],
                url: "https://github.com/boobalan3484/social-post-app",
                image: socialPost
            },
            {
                title: 'Enquiry Form',
                description: 'I developed a Enquiry Form application. The project extended its capabilities by seamlessly integrating MongoDB to store and manage submitted form data.',
                tech: ['HTML', 'CSS', 'JavaScript', 'Bulma CSS'],
                url: "https://github.com/boobalan3484/enquiry-form",
                image: form
            },
            {
                title: 'Fruit Shop',
                description: 'I developed a dynamic Fruit Shop app, with React and enhancing the user interface with Tailwind CSS framework. This project showcases my proficiency in front-end development and user interface design.',
                tech: ['React', 'Tailwind CSS'],
                url: "https://github.com/boobalan3484/fruit-shop",
                image: fruitshop
            }
        ]
    },

    professions: {
        nav: 'experience',
        profession: [
            {
                role: 'Intern ',
                position: "· Full Stack Web Developer",
                organization: " Infyrec, Salem - Tamil Nadu. ",
                duration: " Dec 2023 - Mar 2024 ",
                logo: 'https://infyrec.in/assets/infyrec-DSmIUPTm.png',
                url: "https://infyrec.in/",
                description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
                technologies: ['Vite + React', 'Expo + React Native', 'Redux', 'Firebase']
            },
            {
                role: 'Trainee ',
                position: "· Full Stack Web Development",
                organization: " Edureka Learning Centre, Salem - Tamil Nadu. ",
                duration: " Jun 2023 - Dec 2023 ",
                logo: elc,
                url: "https://www.edureka.co/learning-center",
                description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
                technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB']
            }
        ]
    },

    certifications: {
        nav: 'certification',
        certification: [
            {
                title: "Full Stack Web Development",
                organization: "Edureka Learning Centre",
                logo: elc,
                url: "https://www.edureka.co/my-certificate/2a7ab6467ddc471b0aa4314775d474af",
                // tech: ['HTML', ' CSS', 'Bootstrap', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB']
                tech: ['JavaScript', 'React', 'Node', 'Express', 'MongoDB']
            },
            {
                title: "The Complete ReactJS Course - Basics to Advanced",
                organization: "Udemy",
                logo: udemy,
                url: "https://www.udemy.com/certificate/UC-cd4aef64-5985-4b02-899d-6dccc5936355/",
                tech: ['React']
            },
            {
                title: "Crash Course on Python",
                organization: "Coursera",
                logo: coursera,
                url: "https://www.coursera.org/verify/NRC7B46UHV7W",
                tech: ['Python']
            },
            {
                title: "Python Programming - Basics to Advanced Level",
                organization: "Udemy",
                logo: udemy,
                url: "https://www.udemy.com/certificate/UC-4d0d0c26-8037-4e81-8ab8-7115079a32aa/",
                tech: ['Python']
            },
            // {
            //     title: "Cybersecurity Essentials",
            //     organization: "Cisco Networking Academy",
            //     logo: cisco,
            //     url: "https://drive.google.com/file/d/1zhlLW2WTTyFIg8fB2R8U2vLTnhZnlksX/view?usp=sharing"
            // },
            // {
            //     title: "New India Learnathon 2021",
            //     organization: "ICT Academy",
            //     logo: ictAcademy,
            //     url: "https://drive.google.com/file/d/1dtjAtoNV7aniwBnSu5BrpI6zDcGmwYiQ/view?usp=sharing"
            // }
        ]
    },

    footer: [
        {
            note: "Loosely designed in ",
            tool: 'Figma ',
            link: 'https://www.figma.com/'
        },
        {
            note: "and coded in ",
            tool: 'Visual Studio Code ',
            link: 'https://code.visualstudio.com/'
        },
        {
            note: 'by ',
            tool: 'Boobalan',
            link: '',
            // logo: logo
        },
        {
            note: '. Built with ',
            tool: 'Vite + React ',
            link: 'https://react.dev/'
        },
        {
            note: 'and ',
            tool: 'Tailwind CSS',
            link: 'https://tailwindcss.com/'
        },
        {
            note: ', deployed with ',
            tool: 'Firebase. ',
            link: 'https://firebase.google.com/'
        }
    ]
}
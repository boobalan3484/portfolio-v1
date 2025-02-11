import React from 'react'
import TitleNav from '../TitleNav'

const About = () => {
    return (
        <section id='about'
            className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="About me">

            <TitleNav
                nav={'About'}
            />

            <div>
                <p className='mb-4 text-justify' data-aos="zoom-in"> Energetic and flexible professional with a robust foundation in Information Technology. Possesses a
                    keen aptitude for innovative design thinking and analytical prowess. I'm a fervent advocate for web
                    and mobile app development, driven by a desire to craft dynamic and captivating digital experiences.
                    Throughout my journey in web development, I've honed my skills in HTML, CSS, JavaScript, React,
                    React Native, Node.js, Express.js, MongoDB, Tailwind CSS, Bootstrap, Bulma, Figma and Firebase.
                    These proficiencies, coupled with my tenacity and passion, inspire me to continuously expand my
                    knowledge and uncover the boundless possibilities within web and mobile app development.</p>
                {/* <p className="mb-4">Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an
                    <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://us.mullenlowe.com/" target="_blank" rel="noreferrer noopener" aria-label="advertising agency (opens in a new tab)">advertising agency</a>,
                    <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://starry.com/" target="_blank" rel="noreferrer noopener" aria-label="start-up (opens in a new tab)">start-up</a>,
                    <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://scout.camd.northeastern.edu/" target="_blank" rel="noreferrer noopener" aria-label="student-led design studio (opens in a new tab)">student-led design studio</a>,
                    <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.apple.com/apple-music/" target="_blank" rel="noreferrer noopener" aria-label="huge corporation (opens in a new tab)">huge corporation</a>.
                </p>
                <p className="mb-4">My main focus these days is building products and leading projects for our clients at
                    <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://upstatement.com/" target="_blank" rel="noreferrer noopener" aria-label="Upstatement (opens in a new tab)">Upstatement</a>.
                    I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an
                    <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank" rel="noreferrer noopener" aria-label="online video course (opens in a new tab)">online video course</a>
                    that covers everything you need to know to build a web app with the Spotify API.</p><p>When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for
                    <span className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-200">
                        <span className="sr-only">Korok seeds</span>
                        <span className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]" aria-hidden="true">K</span>
                        <span className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]" aria-hidden="true">o</span>
                        <span className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]" aria-hidden="true">r</span>
                        <span className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]" aria-hidden="true">o</span>
                        <span className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]" aria-hidden="true">k</span>
                        <span className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]" aria-hidden="true">&nbsp;</span>
                        <span className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]" aria-hidden="true">s</span>
                        <span className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]" aria-hidden="true">e</span>
                        <span className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]" aria-hidden="true">e</span>
                        <span className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]" aria-hidden="true">d</span>
                        <span className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]" aria-hidden="true">s</span>
                    </span>.
                </p> */}
            </div>
        </section>
    )
}

export default About
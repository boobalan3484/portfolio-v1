import React from 'react'
import { data } from '../../Utils/Data'
import TitleNav from '../TitleNav'
import ExternalLink from '../ExternalLink'
import Para from '../Para'
import Techs from '../Techs'

const Projects = () => {

    const { works } = data

    return (
        <section id='projects'
            className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="Projects">

            <TitleNav
                nav={works.nav}
            />

            <div>
                <ul className='group/list'>
                    {works.project.map((project, i) => (
                        <li className='mb-12' key={i} data-aos="zoom-in" data-aos-delay={i * 50}>
                            <div className='group relative grid gap-4 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-40  '>
                                <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block  lg:group-hover:bg-slate-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                                <div className='z-10 sm:order-2 sm:col-span-6  '>
                                    <h3>
                                        <ExternalLink
                                            url={project.url}
                                            title={project.title}
                                        />
                                    </h3>
                                    <Para
                                        description={project.description}
                                    />
                                    <Techs
                                        technologies={project.tech}
                                    />
                                </div>

                                <img src={project.image}
                                    className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
                                    alt={project.title} loading="lazy" width="200" height="48" decoding="async" data-nimg="1" style={{ color: 'transparent' }}
                                />

                            </div>



                        </li>
                    ))}
                </ul>
            </div>
        </section >

    )
}

export default Projects
import React from 'react'
import { data } from '../../Utils/Data'
import TitleNav from '../TitleNav'
import ExternalLink from '../ExternalLink'
import Para from '../Para'
import Techs from '../Techs'

const Experience = () => {

    const { professions } = data

    return (
        <section id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">

            <TitleNav
                nav={professions.nav}
            />

            <div>
                <ol className="group/list">
                    {professions.profession.map((profession, i) => (
                        <li className="mb-12" key={i} data-aos="zoom-in" data-aos-delay={i * 50}>
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2" aria-label="duration">{profession.duration}</header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <div>
                                            <ExternalLink
                                                url={profession.url}
                                                role={profession.role}
                                                title={profession.position}
                                            />
                                        </div>
                                        <div className='mt-2'>
                                            <div className="text-slate-400 " aria-hidden="true">{profession.organization}</div>
                                        </div>
                                    </h3>
                                    {/* <Para
                                        description={profession.description}
                                    /> */}
                                    <Techs
                                        technologies={profession.technologies}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default Experience
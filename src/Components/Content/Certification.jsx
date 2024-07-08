import React from 'react'
import { data } from '../../Utils/Data'
import TitleNav from '../TitleNav'
import ExternalLink from '../ExternalLink'

const Certification = () => {

    const { certifications } = data

    return (

        <section id='certification'
            className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="Certification">

            <TitleNav
                nav={certifications.nav}
            />

            <div>
                <ul className='group/list'>
                    {certifications.certification.map((item, i) => (
                        <li className='mb-12' key={i} data-aos="zoom-in" data-aos-delay={i * 50}>
                            <div className='group relative grid gap-4 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-40  '>
                                <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block  lg:group-hover:bg-slate-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                                <div className='z-10 sm:order-2 sm:col-span-6  '>
                                    <h3>
                                        <ExternalLink
                                            url={item.url}
                                            title={item.title}
                                        />
                                    </h3>
                                    <div className='mt-2'>
                                        <div className="text-slate-400 " aria-hidden="true">{item.organization}</div>
                                    </div>
                                </div>
                                <div className='w-48 sm:w-full h-16 px-6 rounded bg-slate-300 border-2 border-slate-600/10 transition group-hover:border-slate-600/30 sm:order-1 sm:col-span-2 sm:translate-y-1'>
                                    <img src={item.logo}
                                        className='h-full sm:w-full w-full'
                                        alt={item.title} loading="lazy" decoding="async" data-nimg="1" style={{ color: 'transparent' }}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section >
    )
}

export default Certification
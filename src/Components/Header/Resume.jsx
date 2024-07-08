import React from 'react'
import { data } from '../../Utils/Data'

const Resume = () => {

    const { resume } = data

    return (
        <div className='hidden lg:flex'>
            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/resume text-base" href={resume.link} target="_blank" rel="noreferrer noopener" aria-label="Resume (opens in a new tab)">
                <span className="-inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"> </span>
                <span data-aos="fade-right" data-aos-delay={50} >{resume.title}
                    <span className="inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/resume:-translate-y-1 group-hover/resume:translate-x-1 group-focus-visible/resume:-translate-y-1 group-focus-visible/resume:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                        </svg>
                    </span>
                </span>
            </a>
        </div>
    )
}

export default Resume
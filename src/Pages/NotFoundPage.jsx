import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-cyan-300 font-semibold tracking-wide" data-aos='fade-up'>
            404 Error
          </h3>
          <p className="text-slate-300 text-4xl font-semibold sm:text-5xl" data-aos='fade-down'>
            Page not found
          </p>
          <p className="text-slate-400" data-aos='zoom-in' data-aos-delay='800'>
            Sorry, the page you are looking for could not be found or has been removed.
          </p>
          <Link to={'/'} className="group/a text-cyan-200 duration-150 hover:text-cyan-100 font-medium inline-flex items-center gap-x-1 drop-shadow rounded-lg px-10 py-2" data-aos='fade-left' data-aos-delay='1000'>
            <span className='absolute'>
              <IoIosArrowRoundUp className='-rotate-90 text-2xl text-cyan-200 group-hover/a:text-cyan-100  transform translate-x-44 group-hover/a:-translate-x-7 drop-shadow  transition-all duration-700 z-10' />
            </span>
            Go Back to Home Page
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
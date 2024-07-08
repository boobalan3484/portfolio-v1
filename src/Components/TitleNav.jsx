import React from 'react'

const TitleNav = ({nav}) => {
    return (
        <div className="sticky lg:hidden  top-0 z-20  mb-4 -mx-6 md:-mx-10 w-screen lg:mb-0 bg-slate-800/70 px-6 py-5 backdrop-blur  md:px-10 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{nav}</h2>
        </div>
    )
}

export default TitleNav
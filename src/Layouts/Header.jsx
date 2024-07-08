import React from 'react'
import Brand from '../Components/Header/Brand'
import Navbar from '../Components/Header/Navbar'
import Resume from '../Components/Header/Resume'
import SocialLink from '../Components/Header/SocialLink'


const Header = () => {
    return (
        // <header className='lg:sticky top-0 bottom-0 left-0  h-full lg:h-screen py-14 lg:py-20 px-8 z-10 flex flex-col justify-between bg-slate-50/15 backdrop-blur-[6px] text-slate-200/80' >
        <header className='lg:sticky w-full lg:w-6/12 top-0 bottom-0 left-0  h-full lg:h-screen py-14 lg:py-20 px-6 md:px-10 lg:px-8 z-10 flex flex-col justify-between  text-slate-200/80' >
            <Brand />
            <Navbar />
            <Resume />
            <SocialLink />
        </header>
    )
}

export default Header
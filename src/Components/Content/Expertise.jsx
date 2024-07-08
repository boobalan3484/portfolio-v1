import React from 'react'
import { data } from "../../Utils/Data";
import TitleNav from '../TitleNav';

const Expertise = () => {

    const { skills } = data

    return (
        <section id='expertise'
            className=' mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="Expertise">

            <TitleNav
                nav={skills.nav}
            />

            <ul className=' w-11/12 mx-auto px-4 grid grid-cols-3 md:grid-cols-4 place-content-center place-items-center text-center gap-4'>
                {skills.expertise.map((item, i) => (
                    <li key={i} className=' grid justify-items-center  w-28 h-24 p-2 rounded-lg cursor-pointer lg:hover:bg-slate-400/40 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg' data-aos="zoom-in" data-aos-delay={i * 50}>
                        <img src={item.logo} alt=" " className=' h-14 w-16  drop-shadow-xl  shadow-slate-900' />
                        <p className='pt-1'>{item.name}</p>
                    </li>
                ))}
            </ul>

        </section>
    )
}


export default Expertise
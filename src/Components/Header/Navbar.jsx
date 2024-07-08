import React from 'react'
import { data } from '../../Utils/Data'
import { Link } from 'react-scroll'
const Navbar = () => {

    const { nav } = data

    return (
        <nav className='hidden lg:block'>
            <ul className='w-max'>
                {nav.map((item, i) => (
                    <li key={i}
                        data-aos="fade-right"
                        data-aos-delay={i * 100}
                    >
                        <Link to={`${item.link}`}
                            activeClass='active'
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            key={i}
                            className='group flex items-center py-3 active cursor-pointer'
                        >
                            <span className='nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'> </span>
                            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-200/80 group-hover:text-teal-300 group-focus-visible:text-teal-300'>
                                {item.name.toUpperCase()}
                            </span>
                        </Link>
                    </li>

                ))}
            </ul>
        </nav>
    )
}

export default Navbar
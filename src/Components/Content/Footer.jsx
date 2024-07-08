import React, { Fragment } from 'react'
import { data } from '../../Utils/Data'

const Footer = () => {

    const { footer } = data

    return (
        <footer className='mx-auto'>
            <p>
                {footer.map((item, i) => (
                    <Fragment key={i}>
                       <span data-aos="fade-up" data-aos-delay={i * 100}> {item.note} </span>
                        <a href={item.link} target='_blank' rel="noreferrer noopener" className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-cyan-300" drop-shadow' data-aos="fade-up" data-aos-delay={i * 100}>
                            {item.tool}
                        </a>
                    </Fragment>
                ))}
            </p>

        </footer >

    )
}

export default Footer
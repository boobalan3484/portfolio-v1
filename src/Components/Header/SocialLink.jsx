import React, { createElement } from 'react'
import { data } from "../../Utils/Data"

const SocialLink = () => {

    const { social_media } = data

    return (

        <div className='mt-8 lg:mt-0 flex flex-col gap-4'>
            <ul className='flex gap-6'>
                {social_media.map((item, i) => (
                    <li key={i} data-aos="fade-up" data-aos-delay={i * 50}>
                        <a
                            href={item.link}
                            target="_blank"
                            className=''
                        >
                            {createElement(item.icon, { className: `text-2xl hover:scale-110 hover:shadow-sm hover:shadow-slate-800 hover:transition-all hover:duration-100  ${item.color} ${item.radius}` })}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLink
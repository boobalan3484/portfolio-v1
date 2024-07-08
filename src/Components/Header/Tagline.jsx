import React from 'react'

const Tagline = ({ tagline,style, aos, aosDelay }) => {
    return (
        <p className={style} data-aos={aos} data-aos-delay={aosDelay}>
            {tagline}
        </p>
    )
}

export default Tagline
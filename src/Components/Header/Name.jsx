import React from 'react'

const Name = ({ name, style, aos, aosDelay }) => {
    return (
        <h1 className={style} data-aos={aos} data-aos-delay={aosDelay}>
            {name}
        </h1>
    )
}

export default Name
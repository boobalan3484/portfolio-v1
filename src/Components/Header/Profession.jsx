import React from 'react'

const Profession = ({ profession, style , aos, aosDelay }) => {
    return (
        <h2 className={style} data-aos={aos} data-aos-delay={aosDelay}>
            {profession}
        </h2>
    )
}

export default Profession
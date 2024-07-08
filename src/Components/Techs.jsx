import React from 'react'

const Techs = ({ technologies }) => {
    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((item, i) => (
                <li className="mr-1.5 mt-2" key={i}>
                    <div className="flex items-center rounded-full  bg-teal-950/30 group-hover/:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        {item}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Techs
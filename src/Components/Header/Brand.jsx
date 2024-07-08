import React from 'react'
import Name from './Name'
import Profession from './Profession'
import Tagline from './Tagline'
import { data } from "../../Utils/Data"

const Brand = () => {
    const { brand } = data;

    return (
        <div className='flex flex-col gap-2'>
            <Name
                name={brand.name}
                style={`text-name tracking-wide  text-slate-50 font-backsteal `}
                aos={"fade-right"}
                // aosDelay={"100"}
            />
            <Profession
                profession={brand.profession}
                style={`text-profession font-semibold capitalize tracking-wider text-slate-100/80 font-alegreya`}
                aos={"fade-right"}
                aosDelay={"200"}
            />
            <Tagline
                tagline={brand.tagline}
                style={`text-tagline tracking-wide`}
                aos={"fade-right"}
                aosDelay={"400"}
            />
        </div>
    )
}

export default Brand
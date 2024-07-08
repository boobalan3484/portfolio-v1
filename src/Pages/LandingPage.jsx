import React from 'react'
import Header from '../Layouts/Header'
import Content from '../Layouts/Content'

const LandingPage = () => {
    return (
        <div className='mx-auto max-w-6xl lg:flex gap-10'>
            <Header />
            <Content />
        </div>
    )
}

export default LandingPage
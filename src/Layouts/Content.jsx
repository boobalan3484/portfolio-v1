import React from 'react'
import About from '../Components/Content/About'
import Experience from '../Components/Content/Experience'
import Expertise from '../Components/Content/Expertise'
import Projects from '../Components/Content/Projects'
import Certification from '../Components/Content/Certification'
import Footer from '../Components/Content/Footer'

const Content = () => {

  return (
    <main className=' w-full lg:w-9/12 py-14 lg:py-20 px-6 md:px-10 lg:px-8 text-slate-300'>
      <About />
      <Experience />
      <Expertise />
      <Projects />
      <Certification />
      <Footer />
    </main>
  )
}

export default Content
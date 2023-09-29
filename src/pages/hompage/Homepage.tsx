import React from 'react'
import Hero from '../../header/Hero'
import About from '../../components/About'
import Doctors from '../../components/Doctors'
import Contact from '../../components/Contact'
import Testimonials from '../../components/Testimonials'

const Homepage = () => {
  return (
    <div>
          <Hero />
          <About />
          <Doctors />
          <Contact />
          <Testimonials />
    </div>
  )
}

export default Homepage

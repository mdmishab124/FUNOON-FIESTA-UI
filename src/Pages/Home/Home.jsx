import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Welcome from '../../Components/Welcome/Welcome'
import About from '../../Components/About/About'
import TeamOverview from '../../Components/TeamOverview/TeamOverview'
import Contact from '../../Components/Contact/Contact'
import TeamLeaders from '../../Components/TeamLeaders/TeamLeaders'
import Testimonial from '../../Components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
        <Welcome />
        <About />
        <TeamOverview />
        <TeamLeaders />
        <Testimonial />
        <Contact />
    </>
  )
}

export default Home

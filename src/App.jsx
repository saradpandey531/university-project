import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Video'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div> 
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='what we offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='University photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What student says'/>
        <Testimonials/>
        <Title subTitle='Contact us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>

      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
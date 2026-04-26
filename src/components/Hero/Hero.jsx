import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education For A Better World.</h1>
        <p>
          Our University Is Committed To Empowering Students With World-Class Education, 
          Practical Skills, And Innovative Experiences To Excel In Their Chosen Fields
          And Contribute Meaningfully To A Rapidly Evolving Global Society.
        </p>
        <button className=' btn'>
          Explore more <img src={darkArrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero
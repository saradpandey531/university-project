import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.avif'
import play_icon from '../../assets/play_icon.png'

function About({ setPlayState }) {
  return (
    <div className='about'>

      {/* LEFT SIDE */}
      <div className="about-left">
        <img src={about_img} alt="about university" className="about-img" />
        
        <img 
          src={play_icon} 
          alt="play" 
          className="play-icon" 
          onClick={() => setPlayState(true)}
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>

        <h2>Nurturing Tomorrow's Leaders Today</h2>

        <p>
          Pokhara University (PU) is a public university in Nepal established in 1997. It is located in Pokhara,
          Gandaki Province, and is known as one of the leading universities in the country. The university was
          created by the Government of Nepal to improve access to higher education and produce skilled human
          resources for national development.
        </p>

        <p>
          The university offers a wide range of academic programs including bachelor’s, master’s, M.Phil,
          and PhD degrees in fields such as management, engineering, health sciences, humanities, and
          social sciences. PU follows a semester system and focuses on both theoretical knowledge and practical
          skills to make students career-ready and innovative.
        </p>

        <p>
          Pokhara University is also known for its quality education, research activities, and affiliation
          with many colleges across Nepal. It has both constituent schools and affiliated colleges that help
          students from different regions access higher education. The university aims to develop critical
          thinking, professionalism, and global competitiveness among its students.
        </p>
      </div>

    </div>
  )
}

export default About
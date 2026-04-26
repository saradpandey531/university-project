import React from 'react'
import './Programs.css'

import Program_1 from '../../assets/Program_1.jpg'
import Program_2 from '../../assets/Program_2.jpg'
import Program_3 from '../../assets/Program_3.jpg'

import Program_icon_1 from '../../assets/Program_icon_1.svg'
import Program_icon_2 from '../../assets/Program_icon_2.svg'
import Program_icon_3 from '../../assets/Program_icon_3.svg'

const Programs = () => {
  return (
    <div className="Programs">

      <div className="Program">
        <img src={Program_1} alt="Program 1" />
        <div className="caption">
          <img src={Program_icon_1} alt="icon 1" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="Program">
        <img src={Program_2} alt="Program 2" />
        <div className="caption">
          <img src={Program_icon_2} alt="icon 2" />
          <p>Master Degree</p>
        </div>
      </div>

      <div className="Program">
        <img src={Program_3} alt="Program 3" />
        <div className="caption">
          <img src={Program_icon_3} alt="icon 3" />
          <p>Post Graduate Degree</p>
        </div>
      </div>

    </div>
  )
}

export default Programs
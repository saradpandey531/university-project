import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery_1.webp'
import gallery_2 from '../../assets/gallery_2.webp'
import gallery_3 from '../../assets/gallery_3.webp'
import gallery_4 from '../../assets/gallery_4.webp'
import Black_btn from '../../assets/Black_btn.png'


const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="campus" />
        <img src={gallery_2} alt="campus" />
        <img src={gallery_3} alt="campus" />
        <img src={gallery_4} alt="campus" />
      </div>
      <button className='btn dark-btn'>see more here <img src={Black_btn} alt="" /></button>
    </div>
  )
}

export default Campus
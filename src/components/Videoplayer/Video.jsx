import React from 'react'
import './Video.css'

function Videoplayer({ playState, setPlayState }) {

  if (!playState) return null

  return (
    <div className="Video_player">

      {/* ❌ CLOSE BUTTON */}
      <button 
        className="close-btn"
        onClick={() => setPlayState(false)}
      >
        ✖
      </button>

      {/* VIDEO */}
      <video
        className="fullscreen-video"
        controls
        autoPlay
        muted
        playsInline
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>

    </div>
  )
}

export default Videoplayer
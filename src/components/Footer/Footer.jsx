import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <p>© 2026 Ed Circle | All Rights Reserved</p>

      <ul>
        <li>
          <Link to="/Terms">Terms of Service</Link>
        </li>

        <li>
          <Link to="/Terms">Privacy Policy</Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
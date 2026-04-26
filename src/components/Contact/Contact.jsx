import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import phone_icon from '../../assets/phone_icon.svg'
import email_icon from '../../assets/email_icon.svg'
import map_icon from '../../assets/map_icon.svg'

const Contact = () => {

  const [result, setResult] = React.useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    setResult("Sending...")

    const formData = new FormData(e.target)

    const response = await fetch("https://formspree.io/f/xyklpdgw", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })

    const data = await response.json()

    if (response.ok) {
      setResult("✅ Message sent successfully!")
      e.target.reset()
    } else {
      setResult("❌ Failed to send message")
    }
  }

  return (
    <div className='contact'>

      {/* LEFT SIDE */}
      <div className="contact_col">

        <h3>
          Send us a message <img src={msg_icon} alt="icon" />
        </h3>

        <p>
          We are here to assist students, parents, and visitors with any inquiries regarding admissions,
          academics, or campus facilities.
        </p>

        <ul>
          <li>
            <img src={email_icon} alt="" />
            info@youruniversity.edu.np
          </li>

          <li>
            <img src={phone_icon} alt="" />
            +977-98XXXXXXXX
          </li>

          <li className="address">
            <div>
              <img src={map_icon} alt="" />
              <strong>Pokhara University</strong><br />
              Balkumari Road, Lalitpur<br />
              Kathmandu, Nepal
            </div>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="contact_col">

        <form className="contact_form" onSubmit={onSubmit}>

          <h2>Contact Form</h2>

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="address" placeholder="Your Address" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Your Phone Number" required />

          <textarea name="message" rows="5" placeholder="Write your message..." required></textarea>

          <button type="submit">Send Message</button>

          <p>{result}</p>

        </form>

      </div>

    </div>
  )
}

export default Contact
import React from 'react'
import './Testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

// USER IMAGES
import user_1 from '../../assets/user_1.jpg'
import user_2 from '../../assets/user_2.jpg'
import user_3 from '../../assets/user_3.jpg'
import user_4 from '../../assets/user_4.jpg'
import user_5 from '../../assets/user_5.jpg'
import user_6 from '../../assets/user_6.jpg'
import user_7 from '../../assets/user_7.jpg'
import user_8 from '../../assets/user_8.jpg'

// BUTTON ICONS
import back_btn from '../../assets/back_btn.png'
import next_btn from '../../assets/next_btn.png'

// DATA
const data = [
  {
    name: "Aarav Sharma",
    img: user_1,
    text: "Pokhara University helped me develop practical skills and confidence for my career growth."
  },
  {
    name: "Sita Gurung",
    img: user_2,
    text: "Supportive teachers and modern learning environment made my academic journey truly enjoyable."
  },
  {
    name: "Ramesh Thapa",
    img: user_3,
    text: "I gained real-world experience that prepared me well for professional challenges ahead."
  },
  {
    name: "Anjali Karki",
    img: user_4,
    text: "The campus environment is inspiring and encourages students to achieve their best goals."
  },
  {
    name: "Bikash Rai",
    img: user_5,
    text: "Excellent faculty and facilities provide students with quality education and great opportunities."
  },
  {
    name: "Nisha Adhikari",
    img: user_6,
    text: "Learning here improved my skills and gave me confidence in my professional life."
  },
  {
    name: "Kiran Bhandari",
    img: user_7,
    text: "A great place to learn, grow, and build a successful future career path."
  },
  {
    name: "Pooja Shrestha",
    img: user_8,
    text: "The university offers practical knowledge that is very useful in real job situations."
  }
]

function Testimonials() {
  return (
    <div className="testimonials">

      {/* CUSTOM BUTTONS */}
      <div className="custom-prev">
        <img src={back_btn} alt="Previous" />
      </div>

      <div className="custom-next">
        <img src={next_btn} alt="Next" />
      </div>

      <Swiper
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}

        /* ✅ RESPONSIVE SETTINGS */
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40
          }
        }}

        modules={[Autoplay, Navigation]}
      >

        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="slide">

              <div className="user-info">
                <img src={item.img} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <span>Pokhara University</span>
                </div>
              </div>

              <p>{item.text}</p>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  )
}

export default Testimonials
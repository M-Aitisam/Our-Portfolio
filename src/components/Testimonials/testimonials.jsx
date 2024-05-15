import React from 'react'
import './Testimonials.css'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../../assets/clientPicture.png'



const data=[
  {
avatar:img1,
name:'Dr. Mohsin Kamal',
information: 'Associate Professor',
dest : 'NUST Isb',
review:'I am thoroughly impressed with the exceptional work you have done on the data analytics project, I have given you. Your ability to analyze, and interpret complex data sets is truly outstanding. Your findings and insights are insightful and actionable, demonstrating a mastery of data analytics techniques. Your dedication to extracting meaningful patterns and trends from data is commendable. Keep up the fantastic work!'

  },

]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"   modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
       {
        data.map((item,index)=>{
        return(  
          <SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={item.avatar} alt="Avatar One" />
          </div>
            <h5 className='client_name'>{item.name}</h5>
            <h6 className='client_name'>{item.dest}</h6>
            <h6 className='client_name'>{item.information}</h6>
            
            <small className='client_review'><p>{item.review}</p></small>
          </SwiperSlide>
          )  })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials

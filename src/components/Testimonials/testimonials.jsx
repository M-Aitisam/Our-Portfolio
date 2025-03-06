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

name:'ayanees33',
information: 'Client',
dest : '',
review:'I am truly impressed by your deep knowledge and willingness to help. Your ability to simplify complex topics and provide clear, actionable advice is outstanding. Your dedication and expertise make a real difference, and I greatly appreciate your support. Keep up the amazing work!'

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

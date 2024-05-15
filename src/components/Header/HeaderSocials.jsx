import React from 'react'
import { BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
  <a href="https://www.linkedin.com/in/mobeen-jamshed-khattak-7895a484" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https://www.instagram.com/mbkanie?igsh=cGQ4czRsaTU1bm0y" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
      <a href="https://www.facebook.com/mobeen.jamshed?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
    </div>
  )
  

}

export default HeaderSocials

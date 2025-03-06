import React from 'react'
import { BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
  <a href="https://www.linkedin.com/in/aitisam-ahmed-9395b62a0/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https://www.instagram.com/aitisam24/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
      <a href="https://www.facebook.com/profile.php?id=61550799254227" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
    </div>
  )
  

}

export default HeaderSocials

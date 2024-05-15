import React from 'react'
import './Footer.css'
import {IoLogoFacebook} from 'react-icons/io'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
  <footer >
<a href="/#" className='footer_logo'>Mobeen Jamshed</a>
<ul className='permalinks'>
<li><a href="/#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#testimonials">Testimonials</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
<div className="footer_socials">
  <a href="https://www.facebook.com/mobeen.jamshed?mibextid=ZbWKwL"><IoLogoFacebook/></a>
  <a href="https://www.instagram.com/mbkanie?igsh=cGQ4czRsaTU1bm0y"><BsInstagram/></a>
  
  
  
  <a href="https://www.linkedin.com/in/mobeen-jamshed-khattak-7895a484" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
  

</div>
<div className="copy_right">
  <small>&copy; Mobeen Jamshed Portfolio. All rights reserved.</small>
</div>
  </footer>
  )
}

export default Footer

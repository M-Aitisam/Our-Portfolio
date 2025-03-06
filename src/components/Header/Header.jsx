import React from 'react'
import './Header.css'
import CTA from './CTA'
import img from '../../assets/AitisamPic.png'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
<h5>Hello I'm</h5>
<h1>Muhammad Aitisam Ahmed</h1>

<h5 className="text-light">
<Typewriter
  options={{
    strings: ['Devops Engineer', 'Full Stack Development'],
    autoStart: true,
    delay: 75,
    loop: true,
  }}
/>
</h5>
<CTA />
<HeaderSocials/>
<div className="me">
  <img src={img} alt="me" />
</div>
<a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header

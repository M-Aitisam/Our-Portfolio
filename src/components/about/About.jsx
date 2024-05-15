import React from 'react'
import './About.css'
import img from '../../assets/mobeen2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TbFolder} from 'react-icons/tb'
const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={img} alt="about_img" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
<FiUsers className='about_icon'/>
<h5>Experience</h5>
<small>7+ Years working</small>
          </article>

          <article className='about_card'>
<FaAward className='about_icon'/>
<h5>Clients</h5>
<small>20+ World</small>
          </article>

          <article className='about_card'>
<TbFolder className='about_icon'/>
<h5>Projects</h5>
<small>9+ Completed</small>
          </article>
        </div>
        <p>Skilled management expert, business analysis professional and data analyst
with more than seven years of industry experience .Energetic presenter and
confident communicator with the ability to circulate information in a way that
is clear, efficient, and beneficial for end users. Creative in finding solutions to
problems and determining modifications for optimal use of organizational
data. Expert at providing realistic projections and establishing various
scenarios to determine viable process strategies to utilize.</p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About

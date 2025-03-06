import React from 'react'
import './About.css'
import img from '../../assets/AitisamPic.png'
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
<small>1.5+ Years working</small>
          </article>

          <article className='about_card'>
<FaAward className='about_icon'/>
<h5>Clients</h5>
<small>10+ World</small>
          </article>

          <article className='about_card'>
<TbFolder className='about_icon'/>
<h5>Projects</h5>
<small>5+ Completed</small>
          </article>
        </div>
        <p>Doing a .NET Framework internship at Air University, focusing on C# development.
Also engaged in a DevOps internship at Bytewise, working on automation and cloud deployment.
Developing skills in software development, CI/CD pipelines, and infrastructure management.
Passionate about optimizing workflows and enhancing system efficiency.
Strong communicator with a clear and practical approach to problem-solving.</p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About

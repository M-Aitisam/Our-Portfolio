import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>

<div className="container services_container">
   <article className='service'>
    <div className="service_head">
      <h3>Backened Development</h3>
    </div>
    <ul className='service_list'>
      <li><BiCheck className='service_list-icon'/>
      <p>Login Authentication</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Databases</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Email Notifications</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Data Management</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>Sql Database Integration</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
      <p>SPSS</p>
      </li>
      <li><BiCheck className='service_list-icon'/>
 <p>Many other </p>
 </li>
    </ul>
  </article>
</div>
    </section>
  )
}

export default Services

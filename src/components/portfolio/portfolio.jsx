import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/proj1.png'
import IMG2 from '../../assets/proj2.png'
import IMG3 from '../../assets/proj3.png'
import IMG4 from '../../assets/proj4.png'
import IMG5 from '../../assets/proj5.png'
import IMG6 from '../../assets/proj6.png'
const Portfolio = () => {
  const data=[
    {
      id:1,
      image:IMG1,
      title:'Student Attendance System '
     
     
    },
    {
      id:2,
      image:IMG2,
      title:'Resturant Project  ',
      
      
    },
    {
      id:3,
      image:IMG3,
      title:'Resturant Project 2',
  
      
    },
    {
      id:4,
      image:IMG4,
      title:' zameen website',

    
    },
    {
      id:5,
      image:IMG5,
      title:'Pkversity ',
     
  
    },
    {
      id:6,
      image:IMG6,
      title:'Foody Website',

    }
  ]
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        
        <div className="container portfolio_container">
          {
 data.map((item)=>{
  return(
  <article key={item.id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={item.image} alt="" />
                </div>
                    <h3>{item.title}</h3>
                    <div className="porifolio_item-cta">
                    
                    
                    </div>
            </article>
  )})           
        
}
        </div>
    </section>
  )
}

export default Portfolio

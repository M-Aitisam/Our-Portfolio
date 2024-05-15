import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
// import Services from './components/Services/Services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
  
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App

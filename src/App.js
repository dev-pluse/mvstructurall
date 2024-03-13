import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeInfo from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Locations from './pages/Locations';
import About from './pages/About';
import Navbar from './Fixed/navbars/Navbar';
import Courses from './pages/Courses';
import Footer from './Fixed/Footer';
import { ScrollToTop } from 'react-router-scroll-to-top';



const App = () => {
  return (
    <div className=''>
         <div className="App w-full h-auto">
        
      <Navbar />
       <ScrollToTop/>
      <Routes>
        
        <Route path='/' element={<HomeInfo/>} />
        
        <Route path='/services' element={<Services />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      <Footer/>
      

    </div>
    
    </div>
    
  )
}

export default App

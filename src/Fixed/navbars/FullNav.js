import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import Services from '../../pages/Services';
import Courses from '../../pages/Courses';
import Locations from '../../pages/Locations';
import About from '../../pages/About';
import Navbar from './Navbar';

const FullNav = () => {
  return (
    <div className=''>
         <div className="App w-full h-auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
    </div>
  )
}

export default FullNav

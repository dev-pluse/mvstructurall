import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'

function Navbar() {
  // nav is starting off false
  const [nav, setNav] = useState(false)
  // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
  const handleClick = () => setNav(!nav)

  return (
    <div>
    <nav className='flex justify-between p-4 md:p-5 items-center nav text-white font-semibold bg-black fixed md:flex z-50 w-full'>
      <h1 className='text-4xl logo hidden md:block'>MVS</h1>
      <ul className='hidden  md:flex gap-6'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/services'><li>Services</li></Link>
        <Link to='/courses'><li>Courses</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/locations'><li>Locations</li></Link>
        <Link to='/contact'><li>Contact Us</li></Link>
      </ul>
      {/* Hamburger or Close Icon */}
      <div className=' md:hidden z-10' onClick={handleClick}>
        {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={25}/>}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0 bg-black'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <Link to='/'><li className='hover:text-teal-700'>Home</li></Link>
        <Link to='/services'><li className='hover:text-teal-700'>Services</li></Link>
        <Link to='/courses'><li className='hover:text-teal-700'>Courses</li></Link>
        <Link to='/about'><li className='hover:text-teal-700'>About</li></Link>
        <Link to='/locations'><li className='hover:text-teal-700'>Locations</li></Link>
        <Link to='/contact'><li className='hover:text-teal-700'>Contact Us</li></Link>
      </ul>
      
    </nav>
    <hr className='h-18'/>
    </div>
  )
}

export default Navbar
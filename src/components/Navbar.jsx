import React from 'react'
import logoImg from './sm-removebg-preview.png' 

const Navbar = () => {
  return (

    <nav className='grid grid-cols-3 items-center bg-indigo-900 text-white py-1.5 px-3 md:px-8 shadow-xl sticky top-0 z-50'>

      <div className="logo cursor-pointer select-none justify-self-start">
        <span className='font-bold text-lg md:text-xl tracking-wide hover:text-indigo-200 transition-all duration-300'>
          iTask
        </span>
      </div>

      <div className="justify-self-center flex items-center">
        <img 
          src={logoImg} 
          alt="SM Logo" 
          className="h-7 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300 cursor-pointer select-none" 
        />
      </div>

      <ul className="flex gap-3 md:gap-8 font-medium justify-self-end text-xs md:text-sm whitespace-nowrap">
        <li className='cursor-pointer text-indigo-100 hover:text-white hover:scale-105 transition-all duration-200 ease-in-out relative select-none after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300'>
          Home
        </li>
        <li className='cursor-pointer text-indigo-100 hover:text-white hover:scale-105 transition-all duration-200 ease-in-out relative select-none after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300'>
          Your Tasks
        </li>
      </ul>

    </nav>
  )
}

export default Navbar
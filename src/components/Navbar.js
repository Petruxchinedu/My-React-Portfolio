import React, { useState } from 'react'
import { FaBars, FaGithub,FaLinkedinIn, } from "react-icons/fa";
import { FaTimes} from "react-icons/fa";
import{HiOutlineMail} from 'react-icons/hi'
import{BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [nav, setNav]= useState(false)

  const handleClick = ()=>{
    setNav(!nav)
  }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className=' font-bold text-4xl text-pink-600'>Devtrux</h1>
      </div>
      <div>
        <ul className='hidden md:flex'>
          <li>
          <Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li>
          <Link to="about" smooth={true} duration={500}>About</Link></li>
          <li>
          <Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li>
          <Link to="work" smooth={true} duration={500}>Work</Link></li>
          <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
      {/* HARMBURGER */}
      <div className='md:hidden px-4 py-6 font-bold text-3xl z-10'onClick={handleClick}>
        {!nav ?<FaBars/> : <FaTimes/>}
      </div>
      {/* mobile view */}
      <div className={!nav ? 'hidden':  'absolute top-0 left-0 w-full h-scren flex flex-col justify-center items-center bg-[#0a192f]'}>
        <ul>
          <li className='text-3xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='text-3xl'><Link  onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
          <li className='text-3xl'> <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className='text-3xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
          <li className='text-3xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
      {/* social icon */}
      <div className=' hidden lg:flex fixed flex-col left-0 top-[35%]'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-700'>
            <a className='flex justify-between items-center w-full text-gray-300' href='www.linkedin.com/in/peter-igbo'>
              Linkedin <FaLinkedinIn size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Petruxchinedu'>
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='dominicpeter494@gmail.com'>
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}


    
export default Navbar

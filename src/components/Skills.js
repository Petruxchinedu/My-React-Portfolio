import React from 'react';
import Tailwind from '../assets/Tailwind.png';
import Reactt from '../assets/Reactt.png'
import Html from '../assets/HTML5_badge.png'
import CSS from '../assets/css image.png'
import Github from '../assets/github.png'
import javascript from '../assets/javascript.png'


const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] flex flex-col justify center h-full mx-auto p-4 w-full'>
        <div>
          <p className=' text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={Html} alt='Html icon'/>
            <p className='py-4'>HTML</p>
          </div>  
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={CSS} alt='Css icon'/>
            <p className='py-4'>CSS</p>
          </div>  
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={javascript} alt='javascript icon'/>
            <p className='py-4'>Javascript</p>
          </div>  
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={Github} alt='Github icon'/>
            <p className='py-4'>Github</p>
          </div>  
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-28 mx-auto pt-5' src={Tailwind} alt='Tailwind icon'/>
            <p className='py-5'>Tailwind</p>
          </div>  
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={Reactt} alt='React icon'/>
            <p className='py-4'>React</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Skills

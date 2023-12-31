import React from 'react'
import{HiArrowRight} from 'react-icons/hi'
const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Peter Chinedu Igbo</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Front End Developer specializing (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building a responsive web applications.</p>
        <div>
          <button className='text-white  group border-2 py-3 px-3 flex items-center gap-2 hover:bg-pink-600 hover:border-pink-600'>View work <HiArrowRight className='group-hover:rotate-90 duration-300'/>
          
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>I'm Peter, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I am passionate about building excellent website that improves the qulaity of business and service provided by clients In order to ensure that they have quality and efficent customer services.</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>   
  )
}

export default About

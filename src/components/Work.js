import React from 'react';
import Myportfolio from '../assets/MyPortfolio.PNG'
import GradingApp from '../assets/SchoolGradingApp.PNG'
import QuizApp from '../assets/QuizApp.PNG'
import TikTakToe from '../assets/TikTakToeGame.PNG'


const Work = () => {
  return (
    <div name="work" className=' w-full md:h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto w-ful h-ful flex flex-col p-4 justify-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
{/* work */}
        <div className='grid sm-grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{backgroundImage:`url(${Myportfolio})`, height:"180px"}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <span className='font-bold text-pink-600 text-3xl mt-32'>My Portfolio</span>
          </div>
          <div style={{backgroundImage:`url(${GradingApp})` , height:"180px"}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           <span className='font-bold text-black text-3xl mt-32'>School Grading App</span>
          </div>
          <div style={{backgroundImage:`url(${QuizApp}) ` , height:"180px"}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <span className='font-bold text-black text-3xl mt-32'>Quiz App</span>
          </div>
          <div style={{backgroundImage:`url(${TikTakToe})` , height:"180px"}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <span className='font-bold text-pink-600 text-3xl mt-28'>TikTakToe App</span>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Work

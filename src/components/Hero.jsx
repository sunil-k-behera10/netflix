import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
    <div className='lg:h-[44.5em] md:h-[44em] h-[34em]' style={{background: "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)"}}>
        <Navbar/>


        <div className='container mx-auto flex justify-center items-center h-96 md:mt-28 mt-10'>
          <div className=''>
            <h1 className='text-white text-center  font-bold md:text-5xl text-3xl px-5 mb-5 '>
              The biggest Indian hits. The best Indian stories. <br className='md:block sm:hidden'/>All streaming here.
            </h1>
            <p className='text-white text-center md:text-2xl text-xl mb-5'>
              Watch anywhere. Cancel anytime.
            </p>
            <p className='text-white mb-5 text-center md:text-xl text-lg '>Ready to watch? Enter your email to <br className='sm:hidden'/>
             create or restart your membership.</p>


            <div className='flex flex-wrap justify-center items-center mb-5 md:mb-0   space-x-2'>
              <input type="text" className='bg-[#1d1e1e] text-white text-lg py-3 px-3 md:w-96 w-80 rounded-md opacity-80 border- border-gray-300 hover:right-1 hover:ring-gray-50 outline-none ' placeholder='Enter Email Address'/>

              <button className='bg-[#e50815] gap-2 flex items-center py-3 px-5 rounded-lg text-white md:mt-0 mt-5' >
                <p className='text-white font-bold text-lg '>Get Started</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
              </button>
            </div>
          </div>
        </div>
    </div>

    <div className='hr_line'/>
    </>
  )
}

export default Hero
import React from 'react'
import Hero from '../components/Hero'
import Enjoy from '../components/Enjoy'
import Download from '../components/Download'
import Watch from '../components/Watch'
import CreateProfile from '../components/CreateProfile'
import { faqData } from '../data/faqData'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <div>
      <Hero/>
      <Enjoy/>
      <Download/>
      <Watch/>
      <CreateProfile/>

      <div className="">
        <h2 className='text-white text-center md:text-5xl text-3xl font-bold py-10'>Frequently Asked Questions <br className='sm:hidden'/></h2>

        <div className='mb-10'> 
            {faqData.map((item,index)=>{
              const {title, desc} = item
              return(
                <Faq key={index} title={title} desc={desc}/>
              )
            })}
        </div>

        <div>
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
            <div className='md:mb-14 mb-10'></div>
            <div className='hr_line'/>

            <Footer/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home
import React from 'react'
import v2 from '../media/v2.mp4'

const Download = () => {
  return (
    <>
    <div>
      <div className='main flex flex-wrap justify-evenly items-center ml-14 md:py-20 py-10 px-5'> 
    
        <div className='left'>
            <video src={v2} className='md:w-[20em] w-[20em] md:mb-0 mb-8' autoPlay={true} muted={true} controls></video>
        </div>


        <div className='right mb-10 md:mb-0'>
          <h2 className='text-white text-center md:text-start text-3xl md:text-5xl font-bold mb-5'>
              Download your shows 
              <br className='hidden md:block' /> to watch offline
          </h2>

          <p className='text-white md:text-2xl text-center md:text-start text-lg '>
               Save your favourites easily and always have <br /> something to watch.

          </p>
        </div>
      </div>
    </div>
    <div className='hr_line'/>
    </>
  )
}

export default Download
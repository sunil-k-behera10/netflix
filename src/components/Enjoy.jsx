import React from 'react'
import v1 from '../media/v1.mp4'

const Enjoy = () => {
  return (
    <>
    <div>
      <div className='main flex flex-wrap justify-evenly items-center ml-14 md:py-20 py-10 px-5'> 
        <div className='left mb-10 md:mb-0'>
          <h2 className='text-white text-center md:text-start text-3xl md:text-5xl font-bold mb-5'>
            Enjoy on your TV
          </h2>
          <p className='text-white md:text-2xl text-center md:text-start text-lg '>
              Watch on smart TVs, PlayStation, Xbox,
              <br  className='hidden md:block'/>
              Chromecast, Apple TV, Blu-ray players and more.
          </p>
        </div>

        <div className='right'>
            <video src={v1} className='md:w-[35em]' autoPlay={true} muted={true} controls></video>
        </div>
      </div>
    </div>
    <div className='hr_line'/>
    </>
  )
}

export default Enjoy
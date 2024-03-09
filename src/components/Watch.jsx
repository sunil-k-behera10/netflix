import React from 'react'
import v3 from '../media/v3.mp4'

const Watch = () => {
  return (
    <>
    <div>
      <div className='main flex flex-wrap justify-evenly items-center ml-14 md:py-20 py-10 px-5'> 
        <div className='left mb-10 md:mb-0'>
          <h2 className='text-white text-center md:text-start text-3xl md:text-5xl font-bold mb-5'>
             Watch everywhere
          </h2>
          <p className='text-white md:text-2xl text-center md:text-start text-lg '>
             Stream unlimited movies and TV shows on your
              <br  className='hidden md:block'/>
              phone, tablet, laptop, and TV.
          </p>
        </div>

        <div className='right'>
            <video src={v3} className='md:w-[35em]' autoPlay={true} muted={true} controls></video>
        </div>
      </div>
    </div>
    <div className='hr_line'/>
    </>

  )
}

export default Watch
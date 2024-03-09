import React from 'react'

const CreateProfile = () => {
  return (
    <>
    <div>
      <div className='main flex flex-wrap justify-evenly items-center ml-14 md:py-20 py-10 '> 
    
        <div className='left'>
        <img className=' md:w-[35em] w-[25em] md:mb-0 mb-10 '
                         src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="img" />
        </div>


        <div className='right mb-10 md:mb-0'>
          <h2 className='text-white text-center md:text-start text-3xl md:text-5xl font-bold mb-5'>
              Create profiles for kids
          </h2>

          <p className='text-white md:text-2xl text-center md:text-start text-lg '>
              Send children on adventures with their favourite <br className='hidden md:block' /> with your membership.

          </p>
        </div>
      </div>
    </div>
    <div className='hr_line'/>
    </>
  )
}

export default CreateProfile
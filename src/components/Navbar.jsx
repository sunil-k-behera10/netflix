import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='main flex justify-between md:justify-around items-center py-5 px-5 '>
        <div className='left'>
          <div className='netflix_logo'> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" className='md:w-44 w-28'/>
          </div>
        </div>

        <div className=''>
          <div className='main flex items-center'>
            <div className=" text-white mx-4 
                        lg:px-5 md:px-5 px-3 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80 bg-gray-700 ">
              <select name="" id="" className='bg-transparent outline-none hover:cursor-pointer  bg-[#111112]'>
                <option className='bg-black' value="English">English</option>
                <option className='bg-black' value="हिन्दी">हिन्दी</option>
              </select>
            </div>

            <Link to='/signin'>
            
            <button className='bg-[#e50815] text-white px-5 py-1.5 rounded-lg font-bold hover:bg-[#d80c1a] hover:cursor-pointer'>Sign in</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
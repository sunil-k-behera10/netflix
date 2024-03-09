import React from 'react'

export default function Signin() {
  return (
    <div style={{background: "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)"

    }}>
      <div className='flex justify-center items-center h-full pt-20'>
        <div className='sub_main bg-black bg-opacity-70 p-20   text-white rounded-lg'>
          <h2 className='text-3xl font-bold ml-1 mb-5'>Sign In</h2>


          <div className='mb-5'>
            <input type="email" placeholder='Email or Phone number' className='w-[300px] px-3 py-3 rounded-md bg-[#333333] outline-none' />

            
          <div className='mb-5 mt-5'> 
            <input type="password" placeholder='Password' className='w-[300px] px-3 py-3 rounded-md bg-[#333333] outline-none' />
          </div>

          <div>
            <button type='button' className='bg-[#e50815] w-[300px] rounded-md py-3 mb-2'>
              Signin
            </button>
          </div>

          <div className='mb-10'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-center items-center gap-1'>
                <input type="checkbox" className='w-4 h-4' />
                <label className='text-gray-400 font-light text-sm'>Remember</label>
              </div>

              <p className='text-sm font-light text-gray-400'>Need Help</p>
            </div>
          </div>


            <div className='mb-5'>
              <p><span className='font-light text-gray-400'>New to Netflix? </span><span className='font-light hover:underline cursor-pointer'>{" "} Sign up now</span></p>
            </div>

            <div className=" mb-20">
               <p className=' text-gray-400 text-sm'>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot. <span className=' text-blue-600 hover:underline cursor-pointer'>Learn more.</span>
               </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

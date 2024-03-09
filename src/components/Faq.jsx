import React, { useState } from 'react'
import { AiOutlineMinus , AiOutlinePlus} from "react-icons/ai";

const Faq = ({title, desc}) => {

  const[open,setOpen] = useState(false);
  return (
    <>
    <div>
      <div className='faq_main container mx-auto md:max-w-6xl text-white'>
        <div className='mb-2'>
          <div className='main top bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center px-5 py-4 cursor-pointer' onClick={()=>setOpen(!open)}>
            <div className='left'>
              <h1 className='md:text-2xl text-xl'>{title}</h1>
            </div>


            <div className='right'>

              {open ?<AiOutlineMinus className='md:text-4xl text-2xl'/> :
               <AiOutlinePlus className='md:text-4xl text-2xl'/>}
            </div>
          </div>

          {open && <div className='main bottom bg-[#2d2d2d] px-5 py-4 my-[1px]' >
            <p className='text-2xl cursor-pointer text-justify md:text-start'>{desc}
            </p>
          </div>}
          
        </div>
      </div>
      
    </div>
    
    {/* <div className='hr_line'/> */}
    
    </>
  )
}

export default Faq
'use client';
import React from 'react'

const Navbar = ({setIsMenu}) => {
  return (
    <div className='w-full h-full flex justify-between items-center'>
      <div className='flex gap-[45px]  '>
        <h3 className='text-white font-[700] font-Montserrat sm:text-[24px] leading-[24px]  xxs:text-[18px]  tracking-[0.1]'>
    <a href="#"> BRANDNAME </a>
        </h3>
        <ul className='flex gap-4 text-white text-[14px]  font-[700] font-Montserrat tracking-[0.2] leading-[24px] xxs:hidden sm:flex  '>
        <a href="#"><li className='hover:text-[#abafbb]'>Home</li></a>
         <a href="#"><li  className='hover:text-[#abafbb]'>Product</li></a>
        <a href="#"><li  className='hover:text-[#abafbb]' >Pricing</li></a> 
        <a href="#"> <li  className='hover:text-[#abafbb]'>Contact</li></a>
        </ul>
      </div>
     
      <div>
        <ul className='font-Montserrat font-[700] text-[14px] tracking-[0.2] leading-[22px] flex items-center gap-4 text-white '>
           <a href="#"><li className='hover:text-[#abafbb] xxs:hidden sm:block  '>Login</li></a> 
          <a href="#"> <li className='bg-[#23A6F0]  px-2 py-2  hover:scale-110 hover:z-10  transform transition duration-500 ease-in-out rounded-lg  '>JOIN US</li></a> 
          <a href="#"> <li  onClick={() => {
              setIsMenu(true); // Toggle state
            }}
             className='sm:hidden'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</li></a> 
        </ul>
      </div>
    </div>
  )
}

export default Navbar

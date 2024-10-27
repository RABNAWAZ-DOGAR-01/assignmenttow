'use client';
import React from 'react'

const NavMob = ({setIsMenu}) => {
  return (
    <div >
        <ul className='w-full h-[60px] px-6  flex items-center justify-between  text-white font-[700] font-Montserrat sm:text-[24px] leading-[24px'>
            <li>BrandName</li> 
            <li onClick={() => {
              setIsMenu(false); // Toggle state
            }}
            className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</li>
        </ul>
      <ul className=' text-white   font-[700] font-Montserrat tracking-[0.2] leading-[24px] text-[18px]'>
        <li className='px-6 tracking-[0.2] hover:bg-[#7c7c7cd2] py-2 cursor-pointer '>Home</li>
        <li className='px-6  tracking-[0.2] hover:bg-[#7c7c7cd2] py-2 cursor-pointer'>Product</li>
        <li className='px-6 tracking-[0.2] hover:bg-[#7c7c7cd2] py-2 cursor-pointer'>Pricing</li>
        <li className='px-6 tracking-[0.2] hover:bg-[#7c7c7cd2] py-2 cursor-pointer'>Contact</li>
        <li className='px-6 tracking-[0.2] hover:bg-[#7c7c7cd2] py-2 cursor-pointer'>Login</li>
      </ul>
    </div>
  )
}

export default NavMob

import React from 'react'

const CardOne = () => {
  return (
    <div className='w-full h-full flex flex-col p-4 gap-4'>
      <div className='w-[90px] h-[90px] bg-[#B9EAA8] rounded-md '></div>
      <div className='flex flex-col gap-2'>
      <h3 className='font-[700] text-[16px] tracking-[0.1] leading-[24px]  font-Montserrat'>2,769 online courses</h3>
      <div className='w-[25px] h-[2px] bg-orange-500'></div>
  
      </div>
      <p   className='font-[400] text-[14px] tracking-[0.2] leading-[20px]  font-Montserrat'>The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
    
    </div>
  )
}

export default CardOne

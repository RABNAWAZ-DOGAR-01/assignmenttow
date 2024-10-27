import React from 'react'

const Herosection = () => {
  return (
    <div className='flex justify-center items-center flex-col h-full w-full  gap-8'>
        <div className='md:w-[50%] flex items-center text-center  flex-col'>
    <a href="#">  <h5 className='text-Montserrat font-[700] text-[16px]  tracking-[0.1] text-[#23A6F0] hover:scale-110 hover:z-10   transform transition duration-500 ease-in-out   '>Welcome</h5></a>  
     <h1 className='text-Montserrat font-[700] xxs:text-[40px] sm:text-[40px] md:text-[58px]  tracking-[0.2] md:leading-[80px] text-[white]  '>Selling on the internet like a pro</h1>
     <p className='text-Montserrat font-[400] text-[20px]  tracking-[0.2] leading-[30px] text-[white]'>We know how large objects will act, but things on a 
     small scale just do not act that way.</p>  
        </div>
     
     <div className='w-full h-[60px] text-Montserrat  font-[700px] text-[14px] leading-[22px] tracking-[0.2] flex justify-center items-center gap-3'>
        <button className='bg-[#23A6F0] w-[150px] py-2 text-white   hover:scale-110 hover:z-10   transform transition duration-500 ease-in-out  '>Set Quote Now</button>
        <button className=' w-[150px] py-2 text-[#23A6F0] border border-[#23A6F0]   hover:scale-110 hover:z-10   transform transition duration-500 ease-in-out  '>Learn More</button>

     </div>
    </div>
  )
}

export default Herosection

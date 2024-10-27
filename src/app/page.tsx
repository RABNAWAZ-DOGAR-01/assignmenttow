'use client'
import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Herosection from "./components/herosection/Herosection";
import Card from "./components/card/Card";
import CardTwo from "./components/card/Card2";
import CardOne from "./components/card/Card1";
import NavMob from "./components/navbtnmob/NavMob";
import { useState } from "react";


export default function Home({}) {
  const [isMenu, setIsMenu] = useState(false)
  console.log('hello ', isMenu)
  
  
  return (

    <div className="w-full h-auto flex flex-col -gap-[260px] bg-[#252b42] relative">
      {/* NavMobversion */}
      <div className={` ${isMenu == true ? 'block' : 'hidden'} w-full h-[100vh] absolute bg-[#252b42] z-10 sm:hidden `}>
        <NavMob setIsMenu={setIsMenu}/>
      </div>
     {/* Navber */}
     <div className={`h-[70px] w-full xxs:px-[20px] md:px-[150px]`}>
      <Navbar setIsMenu={setIsMenu}/>
      </div>
      {/* hero section */}
      <div className="h-[60%] mt-[50px] xxs:!px-[20px] -bg-gray-300 lg:px-[150px]">
        <Herosection/>
      </div>
      {/* products section */}
      <div className="w-full h-96 flex justify-center gap-8 items-center flex-wrap bg-[#252b42] xxs:mt-12  md:mt-0 ">
        <div className="w-[260px]  h-[260px] bg-white rounded-lg     transform transition duration-500 ease-in-out        hover:scale-110 hover:z-10  cursor-pointer">
        <Card/>
        </div>
        <div className="w-[260px] h-[260px] bg-white rounded-lg        transform transition duration-500 ease-in-out       hover:scale-110 hover:z-10  cursor-pointer">
        <CardOne/>
        </div>
        <div className="w-[260px] h-[260px] bg-blue-500 rounded-lg       transform transition duration-500 ease-in-out     hover:scale-110 hover:z-10  cursor-pointer ">
        <CardTwo/>

        </div>
      </div>
    </div>
  );
}

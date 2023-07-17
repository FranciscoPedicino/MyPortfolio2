import React from 'react'
import {Link as Anchor } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="h-24 flex justify-center items-center bg-[#F5F5F5]  ">
      <div className='w-[40%] h-16 flex justify-around items-center'>
       <Anchor to="/"><button className='w-24  h-12 font-semibold rounded-full '>Home</button></Anchor>
       <Anchor to='/AboutMe'> <button className='w-24  h-12 font-semibold rounded-full hover:bg-[#0ACF83]  '>About Me</button></Anchor> 
      <button className='w-24  h-12 font-semibold rounded-full hover:bg-[#0ACF83]  '>Skills</button>
      <button className='w-24  h-12 font-semibold rounded-full hover:bg-[#0ACF83] '>Portfolio</button>
      <button className='w-24  h-12 font-semibold rounded-full   hover:bg-[#0ACF83] '>Contact</button>
      </div>
    </div>
  )
}

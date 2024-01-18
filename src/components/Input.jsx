import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";


const Inputs = () => {
  return (
  <div className='flex flex-row justify-center my-6'>

      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

        <input type="text" placeholder='Search for city...' className='text-xl font-light p-2 w-full shadow-xl focus: outline-none capitalize placeholder:lowercase' />
        <IoSearchSharp size={25} className='text-white cursor-pointer transition hover:scale-125' />
        <GrLocation size={25} className='text-white cursor-pointer transition hover:scale-125'/>

      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button className='text-white font-light text-xl' name='metric'>°C</button>
        <p className='text-xl text-white mx-1'>|</p>
        <button className='text-white font-light text-xl' name='metric'>°F</button>
      </div>
    </div>
  )
}
export default Inputs;
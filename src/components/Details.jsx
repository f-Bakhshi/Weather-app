import React from 'react'
import { CiTempHigh } from "react-icons/ci";
import { LuWind } from "react-icons/lu";
import { SiRainmeter } from "react-icons/si";
import { FiSun, FiSunset  } from "react-icons/fi";
import { FaArrowUp, FaArrowDown  } from "react-icons/fa";







function Details() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Sunny</p>
        </div>
        <div className='flex items-center text-white py-3 flex-row justify-between'>
        <svg className="w-20"
         data-v-b8dd9ac6="" width="50px" height="50px" viewBox="0 0 148 148" class="owm-weather-icon"><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117" fill="#f15d46"></path></svg>
         <p className="text-5xl">34°</p>
         <div className="flex flex-col space-y-2">
          <div className='flex font-light text-sm items-center justify-center'>
            <CiTempHigh size={18} className='mr-l'/>
            Real fell:
            <span className='font-medium ml-1'>32°</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <SiRainmeter size={18} className='mr-l'/>
            Humidity:
            <span className='font-medium ml-1'>65%</span>
          </div>  <div className='flex font-light text-sm items-center justify-center'>
            <LuWind size={18} className='mr-l'/>
            Wind:
            <span className='font-medium ml-1'>11 km/h</span>
          </div>
         </div>
        </div>
        <div className=' flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
          <FiSun/>
          <p className='font-light'>
            Rise: <span className='font-medium ml-1'>05:45 AM</span>
          </p>
          <p className='font-light'>|</p>
          <FiSunset/>
          <p className='font-light'>
            Set: <span className='font-medium ml-1'>06:45 PM</span>
          </p>
          <p className='font-light'>|</p>
          <FaArrowUp/>
          <p className='font-light'>
            High: <span className='font-medium ml-1'>45°</span>
          </p>
          <p className='font-light'>|</p>
          <FaArrowDown/>
          <p className='font-light'>
            Low: <span className='font-medium ml-1'>17°</span>
          </p>
        </div>
        
    </div>
  )
}

export default Details
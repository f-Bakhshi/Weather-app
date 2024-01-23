import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className="text-white text-xl font-extralight">Today, 19 Jan 2024 | Local time : 3:17PM</p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>Herat, DE</p>
        </div>
    </div>
  )
}

export default TimeAndLocation
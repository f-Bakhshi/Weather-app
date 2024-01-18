import React from 'react'

function TopButtons() {
    const cities = [
        {
            id: 1,
            name: "Kabul"},
        {
            id: 2,
            name: "Herat"
        },  
        {
            id: 3,
            name: "Bamyan"
        },  
        {
            id: 4,
            name: "Mazar-e-sharif"
        },
        {
            id: 5,
            name: "Qandahar"
        },  {
            id: 6,
            name: "Ghazni"
        }
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city)=>{
            return(
                <button key={city.id} className='text-white text-lg font-medium'>{city.name}</button>
            )
        })}
    </div>
  )
}

export default TopButtons
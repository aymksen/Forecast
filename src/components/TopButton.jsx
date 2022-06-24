import React from 'react'

export default function TopButton() {
    const cities = [
            {
                id:1,
                title:"London"
            },
            {
                id:1,
                title:"Sydney"
            },
            {
                id:1,
                title:"Tokyo"
            },
            {
                id:1,
                title:"Toronto"
            },
            {
                id:1,
                title:"Paris"
            },
    ]
  return (
    <div className='flex items-center justify-around my-6 '>
    {cities.map((city) =>(
        
        <button key={city.id} className='text-white transition ease-out hover:scale-110'>{city.title}</button>
        ))}
    </div>
  )
}

import React from 'react'

const Featured = () => {
  return (
    <div className='w-full max-w-screen-xl flex justify-between gap-5 '>
        <div className='relative text-white rounded-lg overflow-hidden h-60'>
            <img src="https://source.unsplash.com/random?mumbai" alt="mumbai"  className='w-full object-cover '/>
            <div className='absolute bottom-5'>
                <h1 >Mumbai</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='relative text-white rounded-lg overflow-hidden h-60'>
            <img src="https://source.unsplash.com/random?bangalore" alt="mumbai"  className='w-full object-cover '/>
            <div className='absolute bottom-5'>
                <h1 >Mumbai</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='relative text-white rounded-lg overflow-hidden h-60'>
            <img src="https://source.unsplash.com/random?delhi" alt="mumbai"  className='w-full object-cover '/>
            <div className='absolute bottom-5'>
                <h1 >Mumbai</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='relative text-white rounded-lg overflow-hidden h-60'>
            <img src="https://source.unsplash.com/random?hyderabad" alt="mumbai" className='w-full object-cover ' />
            <div className='absolute bottom-5'>
                <h1 >Mumbai</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
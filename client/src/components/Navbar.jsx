import React from 'react'

const Navbar = () => {
    return (
        <div className='h-12 bg-blue-700 flex justify-center'>
            <div className='w-full max-w-[1024px] text-white flex items-center justify-between'>
                <span className='font-medium'>Booking.com</span>
                <div>
                    <button className='ml-5 border-none py-1 px-2 cursor-pointer text-blue-600 bg-white'>Register</button>
                    <button className='ml-5 border-none py-1 px-2 cursor-pointer text-blue-600 bg-white'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import { FaCarSide, FaTaxi, FaPlane, FaBed, FaCalendar } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import { DateRange } from 'react-date-range';
const Header = () => {

    const [date, setDate] = React.useState([{
        startDate: new Date(),
        endDate: null,
        key: 'selection'
    }])
    return (
        <div className='bg-blue-600 text-white flex justify-center relative'>
            <div className='w-full max-w-[1024px] mt-5 mx-0 mb-24'>
                <div className='flex gap-10'>
                    <div className='flex items-center gap-2 p-2 border-2 border-white rounded-full'>
                        <FaBed></FaBed>
                        <span>Stay</span>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <FaCarSide></FaCarSide>
                        <span>Car Rentals</span>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <FaPlane></FaPlane>
                        <span>FLight</span>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <FaBed></FaBed>
                        <span>Attractions</span>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <FaTaxi></FaTaxi>
                        <span>Taxi</span>
                    </div>
                </div>
                <h1 className='my-5 mx-0 text-2xl font-bold'>Discounts?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, odio!</p>
                <button className='bg-blue-500 text-white font-medium border-none p-2'>Sign In</button>
                <div className='h-7 bg-white border-2 border-yellow-400  rounded flex items-center justify-between py-6 px-7 absolute bottom-[-22px] w-full max-w-5xl'>
                    <div className='flex gap-2 items-center '>
                        <FaBed color='#D3D3D3' />
                        <input type="text" placeholder='Search' className='border-none outline-none' />
                    </div>
                    <div className='flex gap-2 items-center '>
                        <FaCalendar color='#D3D3D3' />
                        <span className='text-zinc-400 cursor-pointer'>check in</span>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <BsFillPersonFill color='#D3D3D3' />
                        <span className='text-zinc-400 cursor-pointer'>2 adults 1 room</span>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <button className='bg-blue-400'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
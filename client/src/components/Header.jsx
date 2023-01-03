import React from 'react'
import { FaCarSide, FaTaxi, FaPlane, FaBed } from "react-icons/fa"
const Header = () => {
    return (
        <div className='bg-blue-600 text-white flex justify-center'>
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
                <div></div>
            </div>
        </div>
    )
}

export default Header
import React from 'react'
import Featured from '../components/Featured'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>
        <div className='mt-12  flex flex-col items-center gap-8 '>
          <Featured/>
          <div className='w-[1024px] font-bold text-2xl'>
            Browse by property type
          </div>
        </div>
    </div>
  )
}

export default Home
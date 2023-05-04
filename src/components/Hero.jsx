import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='pl-6 pr-6 space-y-2 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold text-lg'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>Grow with data.</h1>
            <div className='flex justify-center items-center md:space-x-4 space-x-2'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-3'>Fast, flexible financing for</p>
                <Typed 
                className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-600'
                strings={['BTB','BTC','SASS']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 pb-4'>
                Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.
            </p>
            <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
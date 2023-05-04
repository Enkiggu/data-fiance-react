import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia debitis ab ratione atque nulla doloribus hic, magni reprehenderit, iste, quaerat repudiandae modi impedit tenetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae qui deserunt obcaecati rerum. Tempore numquam quis, magnam dolores iste ipsum aut nobis atque. Numquam fugit cumque cum, ducimus reprehenderit maiores.
                </p>
                <button className='text-[#00df9a] bg-black w-[200px] rounded-md md:mx-0 font-medium my-6 mx-auto py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaGithubSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div className=''>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, adipisci modi. Excepturi sit eius velit saepe necessitatibus ad debitis vitae atque, nihil omnis quam magni, rem iusto cupiditate soluta esse. Perferendis sit molestias facere sapiente vero! Magni quod animi cumque!</p>
            <div className='flex flex-row '>
                <FaFacebookSquare size={30} className='text-3xl mr-4'/>
                <FaTwitterSquare size={30} className='text-3xl mr-4'/>
                <FaInstagramSquare size={30} className='text-3xl mr-4'/>
                <FaDribbbleSquare size={30} className='text-3xl mr-4'/>
                <FaGithubSquare size={30} className='text-3xl mr-4'/>

            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>
            
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
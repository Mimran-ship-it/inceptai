import React from 'react'
import { Josefin_Sans, Poppins } from 'next/font/google'

const jsans = Josefin_Sans({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function Services() {
  return (
    <div className='services mb-10 md:mb-14 lg:mb-20 
        py-6 sm:py-14 md:py-20 lg:py-28 px-14'>
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 md:mb-6 lg:mb-10">
            <h1 className={`${jsans.className} text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 md:mb-0`} style={{ color: 'rgba(38, 143, 129, 1)', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                Services
            </h1>
            <button className="text-white signin_btn border-0 px-3 md:px-5 py-2 lg:px-7 contactbtn hover:cursor-pointer focus:outline-none rounded-lg text-sm md:text-base hover:bg-teal-800">
                CONTACT FOR DEMO
            </button>
        </div>

        <p className={`${pop.className} text-base sm:text-lg lg:text-xl font-normal md:w-2/3 lg:w-1/2`} >
            Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet, 
            consectetur ad consectetur adipiscing elit ut aliquam, purus.consectetur adipiscing elit ut aliquam, purus.
        </p>
    </div>
  )
}
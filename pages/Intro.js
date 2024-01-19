'use client'
import React, { useEffect } from 'react'
import { Josefin_Sans, Poppins } from 'next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
const jsans = Josefin_Sans({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['400'] })




const Intro = (Hover) => {
    const [Hovertrue, setHovertrue] = useState(false)
    useEffect(() => {
      setHovertrue(Hover.Hover)
    
    }, [Hover.Hover])
    

    return (

        <div className={`inline-flex  z-50 `}>


            {console.log('ss',Hovertrue)}
           
            {/* marginRight:'650px' */}
            <div className='flex  flex-col mt-10 sm:mt-16 md:mt-28 lg:mt-40 
                mb-14 sm:mb-20 md:mb-28 lg:mb-48 mx-5 md:ml-8' style={{ color: '#87D7C8' }}>
                {Hovertrue&& <motion.h1 initial={{ x: 0, y: 0 }} animate={{
                    x: -30,
                    y: 15,
                    rotate: 0,
                }} transition={{ duration: .5 }} className={`${jsans.className}  text-center md:text-left 
                    text-4xl sm:text-6xl lg:text-8xl font-bold mb-2`}
                    style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>InceptAI</motion.h1>}
                {!Hovertrue&& <motion.h1 animate={{
                    x: 0,
                    y: 0,
                    rotate: 0,
                }} initial={{ x: -20, y: 10 }} transition={{ duration: .5 }} className={`${jsans.className} text-center md:text-left 
                    text-4xl sm:text-6xl lg:text-8xl font-bold mb-2`}
                    style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>InceptAI</motion.h1>}
                <p className={`${pop.className} mr-auto text-center md:text-left md:w-2/3 lg:w-1/2
                    text-xs sm:text-sm md:text-base font-light leading-5`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod consequat viverra.
                    Suspendisse turpis ex, hendrerit non ipsum feugiat, volutpat a
                    uctor metus. In hendrerit lacinia massa vitae imperdiet. Integer at felis risus.
                </p>
            </div>
        </div>
    )
}
export default Intro


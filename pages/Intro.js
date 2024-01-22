'use client'
import React, { useEffect } from 'react'
import { Josefin_Sans, Poppins } from 'next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
const jsans = Josefin_Sans({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['400'] })




const Intro = () => {
    

    return (

        <motion.div initial={{scale:0}} animate={{scale:1}} className='section inline-flex z-50 h-screen '>


           
            {/* marginRight:'650px' */}
            <div className='flex items-center  justify-center  flex-col mt-10 sm:mt-16 md:mt-28 lg:mt-40 
                mb-14 sm:mb-20 md:mb-28 lg:mb-48 mx-5 md:ml-8' style={{ color: '#87D7C8' }}>
                
                 <h1  className={`${jsans.className} text-center md:text-left 
                    text-4xl sm:text-6xl mb-3  lg:text-8xl font-bold sm:mb-2`}
                    style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>InceptAI</h1>
                <p className={`${pop.className}   md:w-2/3 text-center lg:w-1/2
                    text-xs sm:text-sm md:text-base  `}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod consequat viverra.
                    Suspendisse turpis ex, hendrerit non ipsum feugiat, volutpat a
                    uctor metus. In hendrerit lacinia massa vitae imperdiet. Integer at felis risus.
                </p>
            </div>
        </motion.div>
    )
}
export default Intro


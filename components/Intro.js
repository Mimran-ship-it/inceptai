'use client'
import React, { useEffect } from 'react'
import { Josefin_Sans, Poppins } from 'next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-hook-inview'
import { useState } from 'react'
import { useCartContext } from '@/pages/index'
const jsans = Josefin_Sans({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['400'] })




const Intro = () => {
    const {  setjumbotronMobview } = useCartContext();
    
    const [ref, inView] = useInView()
    const [ref1, inView1] = useInView()
    setjumbotronMobview(inView1)
    return (

        <motion.div  initial={{scale:0}} animate={{scale:1}} className='section bg-black bg-opacity-20   inline-flex w-screen '>

{inView&&<motion.video initial={{ opacity: 0,scale:0    }}  animate={{  opacity: .5, scale: 1}} transition={{ delay: .5,duration:.5,stiffness:50 }} type="video/mp4" src="/video/bgvideo.mp4" autoPlay data-autoPlay muted  loop playsInline className="-z-10   fixed  top-auto bottom-auto sm:w-screen h-screen object-fill sm:object-cover  "/>}
            {/* marginRight:'650px' */}
            <div ref={ref1}  className='flex items-center  justify-center  flex-col mt-10 sm:mt-16 md:mt-28 lg:mt-40 
                mb-14 sm:mb-20 md:mb-28 lg:mb-48 mx-5 md:ml-8' style={{ color: '#87D7C8' }}>
                
                 <h1 ref={ref}  className={`${jsans.className} text-center md:text-left 
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


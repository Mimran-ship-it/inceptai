'use client'
import React, { useState,useEffect } from 'react'
import Intro from './Intro'
import Boxes from './Boxes'
import Services from './Services'
import Footer from './Footer'
import WPossible from './WPossible'
import Headroom from 'react-headroom'
import Nav from './Nav'
import Circle from './ellipse'
import { useCartContext } from '@/pages/index'
import { motion } from 'framer-motion'


export default function Main() {
  const {servicesVisible,jumbotronMobview}=useCartContext()
  const [clientSide, setclientSide] = useState(false)
  useEffect(() => {
  setclientSide(true)  
  }, [])  
  return (
    <div className='overflow-x-hidden' >
{(servicesVisible &&clientSide)&&<motion.div animate={{scale:0}} initial={{scale:1}} transition={{duration:.4}} className={`w-screen  z-0 ${window.innerWidth<380?'hidden':'visible'}`}>
  <Circle rotate={25} />
  <Circle rotate={0} />
 <div className='flex  flex-row-reverse relative top-[20rem]'> 
 <Circle rotate={25} />
 <Circle rotate={45} />
</div>
 </motion.div>
 }
 {clientSide && window.innerWidth > 700 ?<>{(!servicesVisible)&&<motion.div animate={{scale:1}} initial={{scale:0}} transition={{duration:.4}} className='w-screen  z-0'>
  <Circle rotate={25} />
  <Circle rotate={0} />
 <div className='flex  flex-row-reverse relative top-[20rem]'> 
 <Circle rotate={25} />
 <Circle rotate={45} />
 </div>
  
</motion.div>}</>:<>{(!servicesVisible&&!jumbotronMobview&&clientSide)&&<motion.div animate={{scale:1}} initial={{scale:0}} transition={{duration:.4}} className={`w-screen  z-0 ${window.innerWidth<380?'hidden':'visible'}`}>
  <Circle rotate={25} />
  <Circle rotate={0} />
 <div className='flex  flex-row-reverse relative top-[20rem]'> 
 <Circle rotate={25} />
 <Circle rotate={45} />
 </div>
  
</motion.div>}</>}


      <Nav/>

    <div className='snap '>
      <Intro/>
        <Boxes />
        <Services />
    </div>
    <Footer />
    </div>
  )
}


 
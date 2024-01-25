'use client'

import { useState } from 'react'
import { Phone } from 'react-feather';
import { AiOutlineClose } from "react-icons/ai";
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SignInBtn from './SignInBtn'
import { Josefin_Sans, Poppins } from 'next/font/google'
import { Menu } from 'react-feather';
import { useInView } from 'react-hook-inview'

const jsans = Josefin_Sans({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function Nav() {
  const [ref, inView] = useInView();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
<div  className='absolute mb-20  left-0 sm:mb-10'>

  <header className="text-gray-400 w-screen   bg-gray-900 body-font navbar absolute top-0 left-0 right-0 z-10">
      <div className="container md:mx-auto flex flex-wrap md:px-1 md:py-0 p-1
        md:flex-row md:items-center justify-between">
        <a className="flex title-font font-medium items-center text-white mb-0 
          md:space-x-0 lg:space-x-0 xl:space-x-0 ">
          <Image src='/logo.png' alt='logo' width={60} height={65} className=' hover:cursor-pointer'></Image>
          <span className={`${jsans.className} mt-1 md:ml-0 lg:ml-3 text-gray-200 text-3xl font-bold hover:cursor-pointer`}
            style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>InceptAI</span>
        </a>
        <nav className={`${pop.className} md:mx-2.5 lg:mx-auto md:space-x-1.5 lg:space-x-5 xl:space-x-10
          hidden md:flex md:flex-wrap 
          items-center text-base justify-center text-white  `}>
          <a className=" p-1 rounded hover:text-gray-100 hover:cursor-pointer">HOME</a>
          <a className=" p-1 rounded hover:text-gray-100 hover:cursor-pointer ">COMPANY</a>
          <a className=" p-1 rounded hover:text-gray-100 hover:cursor-pointer ">EVENTS</a>
          <a className=" p-1 rounded hover:text-gray-100 hover:cursor-pointer ">FAQs</a>
          <a className=" p-1 rounded hover:text-gray-100 hover:cursor-pointer ">ABOUT</a>
          <a className=" p-1 rounded hover:text-gray-100 hover:cursor-pointer ">SERVICES</a>
          
        
        
        </nav>
        <SignInBtn />
        <button
            onClick={toggleMenu}
            className=" md:hidden sm:left-12  left:0 sm:right-0 right-5  p-1 rounded hover:text-gray-100 hover:cursor-pointer focus:outline-none relative"
          >
            {!isMenuOpen?<Menu  className="h-8 w-8  svg-color" />:<motion.div initial={{ scale:0 }} animate={{ scale:1 }} transition={{duration:.2}} exit={{ opacity: 0 }}  className='svg-color text-3xl'><AiOutlineClose /></motion.div>}
            {isMenuOpen ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:.5}} exit={{ opacity: 0 }}
                className="absolute top-10 right-0 z-10 mt-2 w-56 rounded-md bg-teal-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className={`${pop.className} py-1`} role="none">
                  <a
                    href="#"
                    className="text-bold flex-end text-black block px-4 py-2 text-sm dropdown_link 
                    rounded hover:text-white hover:cursor-pointer"
                    style={{ textDecoration: 'none' }}
                    onClick={() => toggleMenu()}
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    HOME
                  </a>
                  <a
                    href="#"
                    className="flex-end text-black block px-4 py-2 text-sm dropdown_link 
                    rounded hover:text-white hover:cursor-pointer"
                    style={{ textDecoration: 'none' }}
                    onClick={() => toggleMenu()}
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    COMPANY
                  </a>
                  <a
                    href="#"
                    className="flex-end text-black block px-4 py-2 text-sm dropdown_link 
                    rounded hover:text-white hover:cursor-pointer"
                    style={{ textDecoration: 'none' }}
                    onClick={() => toggleMenu()}
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    EVENTS
                  </a>
                  <a
                    href="#"
                    className="flex-end text-black block px-4 py-2 text-sm dropdown_link 
                    rounded hover:text-white hover:cursor-pointer"
                    style={{ textDecoration: 'none' }}
                    onClick={() => toggleMenu()}
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    FAQs
                  </a>
                  <a
                    href="#"
                    className="flex-end text-black block px-4 py-2 text-sm dropdown_link 
                    rounded hover:text-white hover:cursor-pointer"
                    style={{ textDecoration: 'none' }}
                    onClick={() => toggleMenu()}
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    ABOUT
                  </a>
                  <a
                    href="#"
                    className="flex-end text-black block px-4 py-2 text-sm dropdown_link 
                    rounded hover:text-white hover:cursor-pointer"
                    style={{ textDecoration: 'none' }}
                    onClick={() => toggleMenu()}
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    SERVICES
                  </a>
                  <div className="mt-1 mx-3">
                    <button
                      type="submit"
                      className="inline-flex items-center text-white signin_btn border-0 py-1 px-3 space-x-1
                      focus:outline-none hover:bg-teal-800 rounded-lg text-base mt-1"
                      onClick={() => toggleMenu()}
                    >
                      <Phone size={16} color="white" className="flex" style={{ stroke: 'white', fill: 'white' }}/>
                      <p className="text-base font-light">SIGN IN</p>
                    </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </button>

      </div>
    </header>
    </div>
  )
}

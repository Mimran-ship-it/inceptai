import React from 'react'
import { Josefin_Sans, Poppins } from 'next/font/google'
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" sm:text-base w-screen text-xs items-center my-2 font-light text-gray-50 flex justify-center z-50  bg-[#061A1B] ">
           <div>@copyright 2024  <a target='blank' href='https://www.linkedin.com/company/inceptai' className='cursor-pointer inline-block ml-3 -mb-[1px]'><FaLinkedinIn /></a></div>           
            </footer>
  )
}
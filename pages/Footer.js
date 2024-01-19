import React from 'react'
import { Josefin_Sans, Poppins } from 'next/font/google'

const jsans = Josefin_Sans({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function Footer() {
  return (
    <footer class="mb-20 text-gray-400 z-50 shadow-2xl bg-white body-font">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <h1 className={`${jsans.className} text-2xl md:text-4xl lg:text-5xl text-black font-bold mb-2 
                        hover:cursor-pointer underline underline-offset-2 md:underline-offset-3 lg:underline-offset-4`}>
                        InceptAI
                    </h1>
                    <p className={`${pop.className}  mx-auto sm:w-full mt-2 text-xs text-center md:text-left sm:text-base font-normal text-black`}>
                        Lorem ipsum dolor sit amet, consectetur ad consectetur adipiscing elit ut aliquam, purus. 
                        vLorem ipsum dolor sit amet. 
                        Lorem ipsum dolor sit amet, consectetur ad consectetur adipiscing elit ut aliquam.
                    </p>
                    <div class="">
                        <div class="mt-5">
                            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                                <a class="text-black hover:cursor-pointer">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 23 23">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a class="ml-3 text-black hover:cursor-pointer">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 23 23">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a class="ml-3 text-black hover:cursor-pointer">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 23 23">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a class="ml-3 text-black hover:cursor-pointer">
                                    <svg fill="currentColor" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 23 23">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className={`${pop.className} text-xl md:text-2xl font-medium text-black mb-2`}>Useful Links</h2>
                    <nav class=" mb-10">
                    <li>
                        <a class="text-black hover:cursor-pointer">First Link</a>
                    </li>
                    <li>
                        <a class="text-black hover:cursor-pointer">Second Link</a>
                    </li>
                    <li>
                        <a class="text-black hover:cursor-pointer">Third Link</a>
                    </li>
                    <li>
                        <a class="text-black hover:cursor-pointer">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className={`${pop.className} text-xl md:text-2xl font-medium text-black mb-2`}>Our Services</h2>
                    <nav class="mb-10">
                    <li>
                        <a class="text-black hover:cursor-pointer">First Link</a>
                    </li>
                    <li>
                        <a class="text-black hover:cursor-pointer">Second Link</a>
                    </li>
                    <li>
                        <a class="text-black hover:cursor-pointer">Third Link</a>
                    </li>
                    <li>
                        <a class="text-black hover:cursor-pointer">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className={`${pop.className} text-xl md:text-2xl font-medium text-black mb-2`}>Contact US</h2>
                    <nav class="mb-10">
                    <li>
                        <a class="text-black hover:cursor-pointer">First Link</a>
                    </li>
                    <li>
                        <a class="text-black hover:cursor-pointer">Second Link</a>
                    </li>
                    <li>
                        <a class="text-black hover:cursor-pointer">Third Link</a>
                    </li>
                    <li>
                        <a class="text-black hover:cursor-pointer">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                
                </div>
            </div>
            
            </footer>
  )
}
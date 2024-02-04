import React from 'react'
import { Josefin_Sans, Poppins } from 'next/font/google'
import { useInView } from 'react-hook-inview'
import { SVGComponent3 } from '@/svg/svgpath';
import SVGComponent8 from '@/svg/svgpath';
import parse from 'svg-path-parser';
import { useEffect, useState } from "react";
import { useCartContext } from '@/pages/index';

const jsans = Josefin_Sans({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function Services() {
  console.log('kskks', useCartContext())
  const { setservicesVisible } = useCartContext()
  // console.log('serviceVisible',serviceVisible)
  const [ref, inView] = useInView();
  useEffect(() => {
    setservicesVisible(inView)
  
  }, [inView])
  
  const [clientSide, setclientSide] = useState(false);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const pathData = "M1 43.5002C40.1667 17.6669 139.6 -18.4998 224 43.5002C329.5 121 373 124.5 406.5 131.5C440 138.5 519 107 512 80.5002C505 54.0002 562.5 -22.4998 647 10.5002C731.5 43.5002 666.5 219.5 821 175.5C975.5 131.5 914 73.0002 914 43.5002C914 -42.4999 1033 57.5 987.5 10.5002";

    const coordinates2 = parse(pathData).map(({ command, x, y }) => {
      return { x, y };
    });
    // Log the coordinates to the console
    setCoordinates(coordinates2);
    setclientSide(true);
  }, []);

  return (
    <div ref={ref} className='section   '>
      {console.log('inview is',inView)}
      <div className='services z-50 w-screen flex flex-col  justify-center
        py-6 sm:py-14 md:py-20 lg:py-28 px-14'>
        <div className='sm:h-[40vh] h-[45vh] mt-7'>
        <div className="flex  flex-col md:flex-row md:justify-between items-center mb-4 md:mb-6 lg:mb-10">
          <h1 className={`${jsans.className} text-3xl sm:text-5xl lg:text-7xl font-bold  mb-4 md:mb-0`} style={{ color: 'rgba(38, 143, 129, 1)', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
            Services
          </h1>
          <button className="text-white signin_btn border-0 px-3 md:px-5 py-2 lg:px-7 contactbtn hover:cursor-pointer focus:outline-none rounded-lg text-sm md:text-base hover:bg-teal-800">
            CONTACT FOR DEMO
          </button>
        </div>
        <p className={`${pop.className} text-sm text-clip sm:text-base lg:text-xl text-white font-normal md:w-2/3 lg:w-1/2`} >
          Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet,
          consectetur ad consectetur adipiscing elit ut aliquam, purus.consectetur adipiscing elit ut aliquam, purus.
        </p>
        </div>

        <div className='relative  sm:h-[30vh] h-[45vh] mt-auto mb-auto  '>
        {clientSide&&<div className='relative flex items-center 2xl:space-y-0 space-y-10  flex-col '>
             <div className='relative flex w-screen justify-center md:space-x-24 space-x-11 me-10'> <img className={`2xl:absolute z-10 top-14 ${window.innerWidth<380?'w-12 mt-8 ms-4':'w-20'} md:w-28   2xl:w-[7%]`} style={{ left: '17%'}} src='/svg/Service1.svg' alt="Service 1" />
              <img className={`2xl:absolute z-10 md:w-28 ${window.innerWidth<380?'w-12 mt-8':'w-20'} top-32  2xl:w-[7%]`} style={{ left: '33%' }} src='/svg/Service2.svg' alt="Service 2" />
              <img className={`2xl:absolute z-10 md:w-28 ${window.innerWidth<380?'w-12 mt-8':'w-20'} top-36  2xl:w-[7%]`} style={{ left: '52%' }} src='/svg/Service3.svg' alt="Service 3" /></div>
             <div className='md:space-x-24 relative justify-center space-x-11 flex w-screen '> <img className={`2xl:absolute z-10 md:w-28 ${window.innerWidth<380?'w-12 ':'w-20'} top-44  2xl:w-[7%]`} style={{ left: '66%' }} src='/svg/Service4.svg' alt="Service 4" />
              <img className={`2xl:absolute z-10 md:w-28 ${window.innerWidth<380?'w-12':'w-20'} top-16  2xl:w-[7%]`} style={{ left: '67%'}} src='/svg/Service5.svg' alt="Service 5" /></div>
            </div>}
        { inView&& <div className=' relative 2xl:block hidden top-10'>
            <div className='absolute font-extrabold left-28 top-12 '>
              <SVGComponent8 style={{ top: '20%' }} />
            </div>
            <div className='absolute z-0  top-[-20%] ' style={{ left: '5%' }}>
              <SVGComponent3 />
            </div>
      
          </div>}
        </div>
      </div>

    </div>
  )
}
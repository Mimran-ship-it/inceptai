import React from 'react'
import { Josefin_Sans, Poppins } from 'next/font/google'
import { useInView } from 'react-hook-inview'
import SVGComponent3 from './svg3'
import SVGComponent4 from './svg4'
import SVGComponent5 from './svg5'
import SVGComponent6 from './svg6'
import SVGComponent7 from './svg7'
import parse from 'svg-path-parser';
import { useEffect,useState } from "react";

const jsans = Josefin_Sans({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function Services() {

const [ref, inView] = useInView();
const [coordinates, setCoordinates] = useState([]);  

    useEffect(() => {
        const pathData = "M1 43.5002C40.1667 17.6669 139.6 -18.4998 224 43.5002C329.5 121 373 124.5 406.5 131.5C440 138.5 519 107 512 80.5002C505 54.0002 562.5 -22.4998 647 10.5002C731.5 43.5002 666.5 219.5 821 175.5C975.5 131.5 914 73.0002 914 43.5002C914 -42.4999 1033 57.5 987.5 10.5002";
    
        const coordinates = parse(pathData).map(({ command, x, y }) => {
          return { x, y };
        });
    
        // Log the coordinates to the console
        setCoordinates([
            {"x": 1, "y": 43.5002},
            {"x": 224, "y": 43.5002},
            {"x": 406.5, "y": 131.5},
            {"x": 512, "y": 80.5002},
            {"x": 647, "y": 10.5002},
            {"x": 821, "y": 175.5},
            {"x": 914, "y": 43.5002},
            {"x": 987.5, "y": 10.5002},
            // Duplicate and reverse the path from here
            {"x": 914, "y": 43.5002},
            {"x": 821, "y": 175.5},
            {"x": 647, "y": 10.5002},
            {"x": 512, "y": 80.5002},
            {"x": 406.5, "y": 131.5},
            {"x": 224, "y": 43.5002},
            {"x": 1, "y": 43.5002}
        ]
        
        );
      }, []);

  return (
    <div >
    <div ref={ref} className='services mb-10 md:mb-14 lg:mb-20 
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
        {inView&&<div  className='flex mt-8'>
    {/* <img className='mr-28' src='/svg/Service1.svg'/> */}
       <div  className='mr-16'> <SVGComponent3 coordinates={{coordinates}}/></div>
       <div className='mr-16'><SVGComponent4 coordinates={{coordinates}}/></div>
       <div className='mr-16'><SVGComponent5 coordinates={{coordinates}}/></div>
       <div className='mr-16'><SVGComponent6 coordinates={{coordinates}}/></div>
       <div className='mr-5'> <SVGComponent7 coordinates={{coordinates}}/></div>
    </div>}
    </div>

    </div>
  )
}
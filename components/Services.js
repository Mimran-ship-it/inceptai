import React from 'react'
import { Josefin_Sans, Poppins } from 'next/font/google'
import { useInView } from 'react-hook-inview'
import SVGComponent3 from '@/svg/svg3';
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
  setservicesVisible(inView)
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const pathData = "M1 43.5002C40.1667 17.6669 139.6 -18.4998 224 43.5002C329.5 121 373 124.5 406.5 131.5C440 138.5 519 107 512 80.5002C505 54.0002 562.5 -22.4998 647 10.5002C731.5 43.5002 666.5 219.5 821 175.5C975.5 131.5 914 73.0002 914 43.5002C914 -42.4999 1033 57.5 987.5 10.5002";

    const coordinates2 = parse(pathData).map(({ command, x, y }) => {
      return { x, y };
    });
    console.log('isi', coordinates2)
    // Log the coordinates to the console
    setCoordinates([
      { "x": 1, "y": 43.5002 },
      { "x": 224, "y": 43.5002 },
      { "x": 406.5, "y": 131.5 },
      { "x": 512, "y": 80.5002 },
      { "x": 647, "y": 10.5002 },
      { "x": 821, "y": 175.5 },
      { "x": 914, "y": 43.5002 },
      { "x": 987.5, "y": 10.5002 },
      // Duplicate and reverse the path from here
      { "x": 914, "y": 43.5002 },
      { "x": 821, "y": 175.5 },
      { "x": 647, "y": 10.5002 },
      { "x": 512, "y": 80.5002 },
      { "x": 406.5, "y": 131.5 },
      { "x": 224, "y": 43.5002 },
      { "x": 1, "y": 43.5002 }
    ]

    );
  }, []);

  const pathData = 'M1 43.5002C40.1667 17.6669 139.6 -18.4998 224 43.5002C329.5 121 373 124.5 406.5 131.5C440 138.5 519 107 512 80.5002C505 54.0002 562.5 -22.4998 647 10.5002C731.5 43.5002 666.5 219.5 821 175.5C975.5 131.5 914 73.0002 914 43.5002C914 -42.4999 1033 57.5 987.5 10.5002';

  const commands = parse(pathData);
  console.log('command', commands)

  // Optionally transform the commands as needed

  // Generate a new path data string (if transformed)
  const newPathData = commands
    .map(command => {
      // Transform each command into a string
      // This is a simplified example ass'uming commands haven't been transformed
      return `${command.code}${command.x},${command.y}`;
    })
    .join(' ');
  console.log('new', newPathData)
  return (
    <div ref={ref} className='section '>
      <div className='services z-50 w-screen flex flex-col justify-center
        py-6 sm:py-14 md:py-20 lg:py-28 px-14'>
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 md:mb-6 lg:mb-10">
          <h1  className={`${jsans.className} text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 md:mb-0`} style={{ color: 'rgba(38, 143, 129, 1)', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
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
       
          <div  className='relative sm:top-16 top-10 w-full '>
            {/* The path SVG should scale with the container */}
            {/* <div className='absolute'><SVGComponent4  coordinates={{coordinates}}/></div> */}
            <div className='relative w-screen h-auto'><SVGComponent3 coordinates={{ coordinates }} /></div>
            <div className='relative'><SVGComponent8 pathData={pathData} />
              {/* <img className='w-full  relative h-auto' src='/svg/Path.svg' alt="Path"/> */}
              <img className='absolute w-[15%]  md:w-[8%]' style={{ left: '30%', top: '28%' }} src='/svg/Service2.svg' alt="Service 2" />
              <img className='absolute w-[15%]  md:w-[8%] h-auto' style={{ left: '0%', top: '0%' }} src='/svg/Service1.svg' alt="Service 1" />
              <img className='absolute w-[15%]  md:w-[8%]' style={{ left: '54%', top: '-15%' }} src='/svg/Service3.svg' alt="Service 3" />
              <img className='absolute w-[15%]  md:w-[8%]' style={{ left: '73%', top: '65%' }} src='/svg/Service4.svg' alt="Service 4" />
              <img className='absolute w-[15%]  md:w-[8%]' style={{ left: '90%', top: '0%' }} src='/svg/Service5.svg' alt="Service 5" />
              {/* ... add more SVGs as needed */}
            </div>
          </div>
        
      </div>

    </div>
  )
}
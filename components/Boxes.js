'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { Josefin_Sans, Poppins } from 'next/font/google'
import WPossible   from './WPossible'
import Circle from './ellipse'
import {useInView} from "react-hook-inview";
import { useCartContext } from '@/pages/index'
  
const jsans = Josefin_Sans({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function Boxes() {
    const { jumbotronMobview, setjumbotronMobview } = useCartContext();
  
const [ref, inViews] = useInView();

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // Function to update window width
        const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
        };

        // Set initial window width
        updateWindowWidth();

        // Attach event listener for window resize
        window.addEventListener('resize', updateWindowWidth);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);
     
    useEffect(() => {
        console.log('i am in view intro')
        console.log('jumbo is',screen.width)  
        screen.width < 700 ? setjumbotronMobview(true) : setjumbotronMobview(false)
    }, [inViews])
    const responsiveStyles = {
        width: 
          windowWidth >= 1024
            ? '501.4px'
            : windowWidth >= 768
            ? '420.93px'
            : windowWidth>=640
            ? '385px'
            : windowWidth>=400
            ? '200px'
            : windowWidth>=150
            ? '200px'
            : '100%',
        
        height:
          windowWidth >= 1024
            ? '256.06px'
            : windowWidth >= 768
            ? '230.37px'
            : windowWidth >= 640
            ? '225px'
            // : windowWidth >= 400
            // ? '215px'
            :'100%'
      };
      const boxStyle = {
        boxShadow: '15px 15px 0px rgba(146, 227, 208, 0.45)',
        ...responsiveStyles,
      };
  return (
    <div ref={ref} className='section2'  >
     
     {(inViews&&screen.width>700)&&<div className='absolute left-0 w-screen flex justify-center items-center h-screen'>
<Circle rotate={45} />
  <Circle rotate={-25} />

</div> }
      
   
        <WPossible />
    <div className='boxes '>
            <div  className='flex justify-end '>
                {/* marginLeft:'680px', */}
                <div  className='w-1/2 box1 tilted_box p-4 sm:p-8 lg:p-10 mb-16 hover-rotate-1 m-auto sm:mr-36 lg:mr-44' style={boxStyle}>
                    <h6 className={`${jsans.className} text-lg sm:text-2xl font-bold mb-1 sm:mb-2 lg:mb-2 text-shadow-lg`}
                        style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>Heading 1</h6>
                    <p className={` text-xs sm:text-base font-normal`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod consequat viverra. Suspendisse turpis ex, 
                        hendrerit non ipsum feugiat, volutpat auctor metus. 
                        In hendrerit lacinia massa vitae imperdiet. Integer at felis risus.
                    </p>
                </div>
            </div>

            <div >
                <div className='box2 tilted_box p-4 sm:p-8 lg:p-10 mb-16 hover-rotate-2 m-auto sm:ml-36 lg:ml-44' style={boxStyle}>
                    <h6 className={`${jsans.className} text-lg sm:text-2xl font-bold mb-1 sm:mb-2 lg:mb-3 text-shadow-lg`}
                        style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>Heading 2</h6>
                    <p className={`${pop.className} text-xs sm:text-base font-normal`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod consequat viverra. Suspendisse turpis ex, 
                        hendrerit non ipsum feugiat, volutpat auctor metus. 
                        In hendrerit lacinia massa vitae imperdiet. Integer at felis risus.
                    </p>
                </div>
            </div>
            </div>
            

<div className='h-screen relative'>
{(inViews&&screen.width>700)&&<div className='absolute left-0 w-screen flex justify-center items-center h-screen'>
<Circle rotate={-25} />
  <Circle rotate={25} />

</div> }
            <div className='flex justify-end  '>
                <div className='box3 tilted_box p-4 sm:p-8 lg:p-10 mb-20 hover-rotate-1 m-auto sm:mr-36 lg:mr-44' style={boxStyle}>
                    <h6 className={`${jsans.className} text-lg sm:text-2xl font-bold mb-1 sm:mb-2 lg:mb-3 text-shadow-lg`}
                        style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>Heading 3</h6>
                    <p className={`${pop.className} text-xs sm:text-base font-normal`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod consequat viverra. Suspendisse turpis ex, 
                        hendrerit non ipsum feugiat, volutpat auctor metus. 
                        In hendrerit lacinia massa vitae imperdiet. Integer at felis risus.
                    </p>
                </div>
            </div>

            <div >
                <div className='box4 tilted_box p-4 sm:p-8 lg:p-10 mb-20 hover-rotate-2 m-auto sm:ml-36 lg:ml-44' style={boxStyle}>
                    <h6 className={`${jsans.className} text-lg sm:text-2xl font-bold mb-1 sm:mb-2 lg:mb-3 text-shadow-lg`}
                        style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>Heading 4</h6>
                    <p className={`${pop.className} text-xs  sm:text-base font-normal`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod consequat viverra. Suspendisse turpis ex, 
                        hendrerit non ipsum feugiat, volutpat auctor metus. 
                        In hendrerit lacinia massa vitae imperdiet. Integer at felis risus.
                    </p>
                </div>
            </div>
            </div>
        
        
        </div>
        
  )
}
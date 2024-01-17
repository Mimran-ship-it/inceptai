import React from 'react'
import { Josefin_Sans, Poppins } from 'next/font/google'

const jsans = Josefin_Sans({ subsets: ['latin'] })
const pop = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function WPossible() {
  return (   
        <div>
            <h1 className={`${jsans.className} text-3xl sm:text-5xl lg:text-7xl font-bold mb-14 text-center`} style={{color:'#3EAC9C'}}>
                What's Possible?
            </h1>
        </div>
  )
}     
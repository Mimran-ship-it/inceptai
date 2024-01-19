import React from 'react'
import Intro from './Intro'
import Boxes from './Boxes'
import Services from './Services'
import Footer from './Footer'
import WPossible from './WPossible'


export default function Main() {
  return (
    <div className='relative w-screen'>
      
        <Boxes />
        <Services />
        <Footer />
    </div>
  )
}

import React from 'react'
import Intro from './Intro'
import Boxes from './Boxes'
import Services from './Services'
import Footer from './Footer'
import WPossible from './WPossible'
import Nav from './Nav'


export default function Main() {
  return (
    <div className='snap overflow-x-hidden'>
      <Nav/>
      <Intro/>
        <Boxes />
        <Services />
        <Footer />
    </div>
  )
}

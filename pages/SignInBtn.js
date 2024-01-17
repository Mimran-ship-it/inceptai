// components/PhoneButton.js

import React from 'react';
import { Phone } from 'react-feather';
import Image from 'next/image'
// import PhoneIcon from '/PhoneIcon.svg';
// import { Phone as PhoneIcon } from 'feather-icons';

const SignInBtn = () => {
  return (  
    <button className="hidden md:inline-flex items-center text-white signin_btn border-0 md:py-1 sm:py-2 lg:py-2 md:px-3 sm:px-7 lg:px-7 lg:space-x-3 sm:space-x-3 md:space-x-0
         focus:outline-none hover:bg-teal-800 rounded-lg text-base mt-4 md:mt-0">
        <Phone size={16} color="white" className="flex sm:flex md:hidden lg:flex" style={{ stroke: 'white', fill: 'white' }}/>
        <p className="">SIGN IN</p>
    </button>
  );
};

export default SignInBtn;

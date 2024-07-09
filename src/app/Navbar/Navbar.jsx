"use client";

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="flex navbar top-0 justify-between py-5 px-3 lg:px-10 fixed w-full z-10">
        <div>
          <h1 className="text-white text-2xl font-semibold">Mµ§ï<span className='text-[#2cd38b]'>Èvåñ</span></h1>
        </div>
        <div className="text-white flex justify-center items-center gap-8 hidden md:flex">
          <a href="#" className="cursor-pointer hover:text-[#2cd38b]">Home</a>
          <a href="#songs" className="cursor-pointer hover:text-[#2cd38b]">Songs</a>
          <a href="#about" className="cursor-pointer hover:text-[#2cd38b]">About</a>
          <a href="#contact" className="cursor-pointer hover:text-[#2cd38b]">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNav}>
            {navOpen ? <FiX className="text-[#2cd38b] text-2xl" /> : <FiMenu className="text-[#2cd38b] text-2xl" />}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-[70px] navbar1 left-0 h-[300px] w-full z-10 text-white flex flex-col items-center justify-center gap-3 px-3 transform ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
       <a href="#" onClick={toggleNav} className="cursor-pointer hover:text-[#2cd38b]">Home</a>
          <a href="#songs" onClick={toggleNav} className="cursor-pointer hover:text-[#2cd38b]">Songs</a>
          <a href="#about" onClick={toggleNav} className="cursor-pointer hover:text-[#2cd38b]">About</a>
          <a href="#contact" onClick={toggleNav} className="cursor-pointer hover:text-[#2cd38b]">Contact</a>
      </div>

            <div className=''>
                <img className='h-[350px] md:h-[580px] xl:h-[700px] w-full mx-auto opacity-45' src="/Images/c7.webp" alt="Image 1" />
            </div>  
                  
           
                  <div  className='absolute flex flex-col justify-center left-10 gap-6 top-[125px] sm:top-[180px] md:top-[240px] lg:top-[270px] xl:top-[290px]'>
                      <h1 className='font-mono text-[23px] md:text-4xl xl:text-[50px]  text-white'>Feel the real sounds</h1>
                      <h1 className='font-serif text-[16px] md:text-[18px] lg:text-xl xl:w-[500px] text-white'>All the latest and popular songs of <span className='text-[#2cd38b]'>Tanveer Evan</span>, stay tuned with us.</h1>
                      <a href="#songs"><button  className='bg-[#2cd38b] text-[13px] md:text-[16px] py-2 w-[80px] md:w-[100px] hover:shadow-xl hover:shadow-[#2cd38b] rounded-md text-white font-semibold'>Explore</button>  </a>
                  </div>
                  
                

    
    </>
  );
};

export default Navbar;

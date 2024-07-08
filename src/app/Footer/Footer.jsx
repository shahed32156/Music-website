import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
       <div className='relative bg-[#01080f] py-16 mt-20 lg:mt-28 px-3'>


            {/* <div class="custom-shape-divider-top-1720406925">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
            </div> */}

        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className="text-white text-2xl font-semibold">Mµ§ï<span className='text-[#2cd38b]'>Èvåñ</span></h1>
          <div className='flex gap-4 text-white mt-2'>

                                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-[#2cd38b]'><FaFacebook className='text-[30px]' /></a>


                                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-[#2cd38b]'><RiWhatsappFill className='text-[30px]' /></a>


                                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-[#2cd38b]'><FaTwitter className='text-[30px]' /></a>


                                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-[#2cd38b]'><FaYoutube className='text-[30px]' /></a>            


                 </div> 

                 <h1 className='text-center text-white'>All the latest and popular songs of Tanveer Evan, stay tuned with us!</h1>
        </div>

        <div className='mt-10 text-center font-semibold'>
          <p className='border-t-[2px] text-white font-[Infographic] border-t-[#2cd38b] pt-4'>Copyright © 2024 Abullah Shahed. All rights reserved</p>  
          </div>
         
       </div>

       
    
    </>
  )
}

export default Footer

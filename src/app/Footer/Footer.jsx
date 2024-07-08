import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
       <div className='relative bg-[#081b29] py-16 mt-20 lg:mt-28 px-3'>


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

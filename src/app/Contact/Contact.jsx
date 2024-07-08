"use client"

import React, { useState } from 'react'
import Swal from'sweetalert2';

import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrPowerReset } from 'react-icons/gr';


const Contact = () => {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleName = (e) => {

        const value = e.target.value;
        const regex = /^[a-zA-Z\s]*$/;
    
        if (regex.test(value)) {
          setName(value);
        } else {
          Swal.fire({
            title: "Error",
            text: "Invalid name",
            icon: "error"
          });
        }
    
        console.log(value);
      
  }

  const handleEmail = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
  }

  const handleQuery = (e) => {
      setQuery(e.target.value);
      console.log(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      
      if (name.length <= 3) {
          Swal.fire({
              title: "Error",
              text: "Name must be more than 3 characters",
              icon: "error"
          });
          return;
      }

      Swal.fire({
          title: "Success",
          text: "Successfully sent",
          icon: "success"
      });

  }

  const handleReset = () => {
      setName("");
      setEmail("");
      setQuery(""); 
  }

  return (
    
    <>
    
    <div className='mx-5 md:mx-8 lg:mx-12 xl:mx-24 2xl:mx-32'>

            
                    <div className='mt-20 flex justify-center items-center'>

                            <h1 className="font-mono text-3xl text-[#2cd38b]">Contact Us</h1>

                    </div>

           


                <div className='mt-10 flex flex-col max-sm:flex-col sm:flex-col md:flex-row xl:flex-row justify-between items-center gap-6'>

                <div className='flex flex-col gap-3'>

                    <h1 className="text-white text-2xl font-semibold">Mµ§ï<span className='text-[#2cd38b]'>Èvåñ</span></h1>
                    
                    <div className='flex gap-4 text-white mt-4'>

                                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-[#2cd38b]'><FaFacebook className='text-[30px]' /></a>


                                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-[#2cd38b]'><RiWhatsappFill className='text-[30px]' /></a>


                                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-[#2cd38b]'><FaTwitter className='text-[30px]' /></a>


                                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-[#2cd38b]'><FaYoutube className='text-[30px]' /></a>            


                     </div> 
                    
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-4'>

    <div className='relative'>
        <input className='w-[300px] text-white h-[50px] focus:outline-none border-2 border-[#2cd38b] pl-4 rounded-lg md:w-[400px]' required type="text" 
        name="name" id="input" onChange={handleName} value={name} />
        <div className='label absolute bg-black text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your name</div>
    </div>

    <div className='relative'>
        <input className='w-[300px] text-white h-[50px] focus:outline-none border-2 border-[#2cd38b] pl-4 rounded-lg md:w-[400px]' required type="email" 
        name="email" id="input2" onChange={handleEmail} value={email} />
        <div className='label absolute bg-black text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your email</div>
    </div>

    <div className='relative'>
        <textarea  className='w-[300px] text-white h-[100px] bg-black focus:outline-none border-2 border-[#2cd38b] pl-4 rounded-lg md:w-[400px]' required 
        name="message" id="query" onChange={handleQuery} value={query} ></textarea>
        <div className='label absolute bg-black text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your message</div>
    </div>

    <div className='flex gap-4 items-center'>
        
       <button className='bg-[#2cd38b] text-white font-[Poppins] font-bold duration-500 px-6 py-2 hover:shadow-[#2cd38b] hover:shadow-xl rounded'>Send</button>
       
       <a className='bg-[#2cd38b] flex items-center gap-1 cursor-pointer font-bold text-white font-[Poppins] duration-500 px-6 py-2  hover:shadow-[#2cd38b] hover:shadow-xl rounded' onClick={handleReset}>
        
        <GrPowerReset /> 
        <p>Reset</p>
        </a>
    </div>

    
</form>

                </div>

                <div>

                    <img className='h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[280px] md:w-[280px] lg:h-[350px] lg:w-[350px] xl:h-[400px] xl:w-[400px] border-8 border-[#2cd38b] rounded-full' src="./Images/contact.image" alt="" />    

                </div>

                </div>



    </div>
    
    </>
  )
}

export default Contact

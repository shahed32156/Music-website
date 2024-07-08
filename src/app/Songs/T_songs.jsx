"use client";

import React, { useState, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import { FaPause, FaPlay, FaBackward, FaForward } from 'react-icons/fa';
import { FaDownload } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const T_songs = ({ onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleRangeChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const handleForward = () => {
    audioRef.current.currentTime += 10;
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className='pt-20 md:pt-24 xl:pt-32 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm mx-3 z-10'>
      <div className='bg-black bg-opacity-70 border-2 border-[#2cd38b] mx-auto w-full xl:w-[450px] h-[550px] rounded-md'>
        <div className='text-end'>
          <button onClick={onClose}>
            <FiX className='text-white text-2xl' />
          </button>
        </div>

        <div className='flex justify-between items-center mx-16 mt-4'>
    
        <a href="./Images/avijog.mp3" download="Avijog" target="_blank">

            <button>
                <FaDownload className='text-white text-xl' /> 
            </button>
        
        </a>
            <button onClick={() => toast("Successfully added to your favourite") }><MdFavoriteBorder className='text-white text-[25px] hover:text-[#2cd38b]' /> </button>
    
        </div>
        <ToastContainer /> 

        <div className='mt-6'>
          <img
            className='mx-auto rounded-full h-[150px] border-white border-4 w-[150px]'
            src='./Images/evan.png'
            alt=''
          />
        </div>
        <div className='flex flex-col justify-center items-center gap-3 mt-6'>
          <h1 className='text-center text-2xl text-[#2cd38b] font-semibold'>Avijog</h1>
          <h1 className='text-white text-[13px] text-center'>
            <span className='text-[#2cd38b] font-semibold'>Singer: </span>Tanveer Evan
          </h1>
          <h1 className='text-white text-[13px] text-center'>
            <span className='text-[#2cd38b] font-semibold'>Music: </span>Piran Khan
          </h1>
        </div>

      

        <div className='flex justify-center items-center mt-4'>
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            src='./Images/avijog.mp3'
          ></audio>
        </div>
        <div className='flex justify-center items-center mt-4 mx-10'>
          <input
            className='w-[300px] bg-[#2cd38b] progress'
            type='range'
            min='0'
            max={audioRef.current ? audioRef.current.duration : 0}
            value={currentTime}
            onChange={handleRangeChange}
          />
        </div>
        <div className='flex flex-row gap-6 justify-center items-center mt-10'>
          <button onClick={handleBackward}>
            <FaBackward className='text-white text-xl' />
          </button>
          <button onClick={handlePlayPause} className='bg-[#2cd38b] rounded-full'>
            {isPlaying ? (
              <FaPause className='text-white text-5xl px-3 py-3' />
            ) : (
              <FaPlay className='text-white text-5xl px-3 py-3' />
            )}
          </button>
          <button onClick={handleForward}>
            <FaForward className='text-white text-xl' />
          </button>
        </div>
      </div>

        

    </div>
  );
};

export default T_songs;

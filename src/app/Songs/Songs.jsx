"use client";

import React, { useState } from 'react';
import T_songs from './T_songs';
import T_songs2 from './T_songs2';
import T_songs3 from './T_songs3';
import T_songs4 from './T_songs4';
import T_songs5 from './T_songs5';
import T_songs6 from './T_songs6';
import T_songs7 from './T_songs7';
import T_songs8 from './T_songs8';
import T_songs9 from './T_songs9';
import T_songs10 from './T_songs10';
import T_songs11 from './T_songs11';
import T_songs12 from './T_songs12';
import T_songs13 from './T_songs13';
import T_songs14 from './T_songs14';
import T_songs15 from './T_songs15';

const songsData = [
  { id: 1, title: 'Avijog', artist: 'Tanveer Evan', component: T_songs },
  { id: 2, title: 'Oviman', artist: 'Tanveer Evan', component: T_songs2 },
  { id: 3, title: 'Ojanay', artist: 'Tanveer Evan', component: T_songs3 },
  { id: 4, title: 'Sesh Kanna', artist: 'Tanveer Evan', component: T_songs4 },
  { id: 5, title: 'Tomake Chai', artist: 'Tanveer Evan', component: T_songs5 },
  { id: 6, title: 'O Mon Re', artist: 'Tanveer Evan', component: T_songs6 },
  { id: 7, title: 'Judaiyaan', artist: 'Tanveer Evan', component: T_songs7 },
  { id: 8, title: 'Maine Royaan', artist: 'Tanveer Evan', component: T_songs8 },
  { id: 9, title: 'Galti', artist: 'Tanveer Evan', component: T_songs9 },
  { id: 10, title: 'Ta Janina', artist: 'Tanveer Evan', component: T_songs10 },
  { id: 11, title: 'Hariye', artist: 'Tanveer Evan', component: T_songs11 },
  { id: 12, title: 'Jontrona', artist: 'Tanveer Evan', component: T_songs12 },
  { id: 13, title: 'Ayna', artist: 'Tanveer Evan', component: T_songs13 },
  { id: 14, title: 'Jaane Kyun', artist: 'Tanveer Evan', component: T_songs14 },
  { id: 15, title: 'Harbar Kyun', artist: 'Tanveer Evan', component: T_songs15 }
];

const Songs = () => {
  const [search, setSearch] = useState('');
  const [activeSongId, setActiveSongId] = useState(null);

  const filteredSongs = songsData.filter(song =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderActiveSong = () => {
    const activeSong = songsData.find(song => song.id === activeSongId);
    if (!activeSong) return null;

    const SongComponent = activeSong.component;
    return <SongComponent onClose={() => setActiveSongId(null)} />;
  };

  return (
    <>
      <div className="text-center mt-20">
        <h1 id='songs' className="font-mono text-3xl text-[#2cd38b]">Tanveer Evan Songs</h1>
        <input
          type="text"
          placeholder="Search Evan Songs"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="mt-10 label text-white pl-2 h-[50px] w-[250px] bg-black focus:outline-none rounded-md border border-[#2cd38b]"
        />
      </div>
      
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mx-3 xl:mx-20">
        {filteredSongs.length > 0 ? (
          filteredSongs.map(song => (
            <button
              key={song.id}
              onClick={() => setActiveSongId(song.id)}
              className="mx-auto xl:w-[350px] md:hover:scale-110 md:hover:transition md:hover:duration-500 transition duration-500"
            >
              <div className="flex flex-col gap-2 items-center justify-center bg-[#081b29] pb-2 rounded-md">
                <img className="h-[110px] sm:h-[200px] md:h-[240px] xl:h-[240px] w-full mx-auto" src="./Images/evan.webp" alt={song.title} />
                <h1 className="text-center text-[14px] sm:text-[16px] md:text-[18px] text-[#2cd38b] font-bold">{song.artist}</h1>
                <p className="text-center text-[12px] sm:text-[14px] md:text-[16px] text-white pb-1">{song.title}</p>
              </div>
            </button>
          ))
        ) : (
          

          <p className="text-center text-white col-span-full"><span className=' px-1 text-[red] text-xl font-extrabold'>X</span>  No songs found</p>

          
        )}
      </div>

      {renderActiveSong()}
    </>
  );
};

export default Songs;

import React from 'react';

import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { FaCat, FaGithub, FaLinkedin } from "react-icons/fa";




export default function Footer() {
  return (
   <>
    <div className='flex justify-around items-center bg-darkGreen h-48 py-4 z-50 relative'>
        {/*<hr className='w-[100%] bg-stone-300 h-[3px] my-4'></hr>  */}
        <div className='flex justify-center items-center gap-3'>
            <FaCat className='text-7xl border-2 border-black rounded-lg p-2'/>
            <h1 className='text-2xl font-extrabold'>Tony Vuong</h1>
        </div>
        <div className='flex justify-center items-center gap-3'>
            <a href='https://www.linkedin.com/in/tony-vuong-9a17a71b6/' className='hover:bg-stone-300 hover:cursor-pointer p-1 rounded-lg' target='blank'>
                <FaLinkedin className='text-4xl'/>
            </a>

            <a href='https://github.com/tonstey' className='hover:bg-stone-300 hover:cursor-pointer p-1 rounded-lg' target='blank'>
                <FaGithub className='text-4xl'/>
            </a>
        </div>
    </div>
   </>
  );
}
'use client';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import Image from 'next/image';
import suyash from './api/hello/suyash.png';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 overflow-hidden'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-2 flex justify-between'>
            <h1 className='text-xl font-burtons tracking-widest dark:text-white'>
              Suyash Patel
            </h1>
            <ul className='flex items-center'>
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(false)}
                    className='cursor-pointer text-2xl dark:text-white'
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(true)}
                    className='cursor-pointer text-2xl'
                  />
                )}
              </li>
              <li>
                <a
                  target='_blank'
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                  href='https://drive.google.com/file/d/1BQaxrYVNjQ-QychLs3Cl_Um1FmeWFspf/view?usp=share_link'>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='flex flex-col items-center'>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full lg:w-96 lg:h-96 h-48 w-48 relative mt-6 overflow-hidden'>
              <Image src={suyash} fill className='object-cover' alt='Profile' />
            </div>
            <div className='text-center p-10'>
              <h2 className='lg:text-5xl text-2xl dark:text-white py-2 text-teal-600 font-medium'>
                Suyash Patel
              </h2>
              <h3 className='lg:text-2xl text-gray-800 dark:text-gray-200 text-lg py-2 w-screen'>
                <Typewriter
                  options={{
                    strings: ['<h3>Full Stack Devlopers</h3>'],
                    autoStart: true,
                    loop: true,
                    skipAddStyles: false,
                    wrapperClassName: 'Typewriter__wrapper',
                    cursorClassName: 'Typewriter__cursor',
                  }}
                />
              </h3>
              <p className='lg:text-lg text-sm py-5 px-2 leading-8 text-gray-800 dark:text-gray-200'>
                I am final year undergraduate student and a Developer with
                strong passion and dedication for self - improvement. I love to
                learn new technolgies and to create new stuffs related to them.
              </p>
            </div>
            <div className='lg:text-5xl text-2xl flex justify-center lg:gap-16 gap-10 py-3 text-gray-600 dark:text-gray-400'>
              <a href='https://github.com/iamsuyashpatel07' target={'_blank'}>
                <AiFillGithub />
              </a>
              <a href='https://leetcode.com/serpensortia/' target={'_blank'}>
                <SiLeetcode />
              </a>
              <a
                href='https://www.linkedin.com/in/suyash-patel-0b6199191/'
                target={'_blank'}>
                <AiFillLinkedin />
              </a>{' '}
              <a href='https://twitter.com/isuyashpatel' target={'_blank'}>
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import Image from 'next/image';
import suyash from './api/hello/suyash.png';

export default function Home() {
  return (
    <main className='bg-white px-10'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons tracking-widest'>Suyash Patel</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
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
          <div className='text-center p-10'>
            <h2 className='lg:text-5xl text-2xl py-2 text-teal-600 font-medium'>
              Suyash Patel
            </h2>
            <h3 className='lg:text-2xl text-lg py-2'>Full Stack Devlopers</h3>
            <p className='lg:text-lg text-sm py-5 leading-8 text-gray-800'>
              I am final year undergraduate student and a Developer with strong
              passion and dedication for self - improvement. I love to learn new
              technolgies and to create new stuffs related to them.
            </p>
          </div>
          <div className='lg:text-5xl text-2xl flex justify-center lg:gap-16 gap-10 py-3 text-gray-600'>
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
          <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full lg:w-96 lg:h-96 h-48 w-48 relative mt-20 overflow-hidden'>
            <Image src={suyash} fill className='object-cover' alt='Profile' />
          </div>
        </div>
      </section>
    </main>
  );
}

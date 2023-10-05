import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';
import Social from '../social'
import suyash from '../../assets/suyash.png'

const About = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full lg:w-96 lg:h-96 h-48 w-48 relative mt-6 overflow-hidden'>
                <Image src={suyash} fill className='object-cover' alt='Profile' />
            </div>
            <div className='flex flex-col space-y-6 text-center mt-10'>
                <h2 className='lg:text-5xl text-2xl dark:text-white text-teal-600 font-medium'>
                    Suyash Patel
                </h2>
                <h3 className='lg:text-2xl h-10 text-gray-800 dark:text-gray-200 text-lg  w-screen overflow-y-hidden'>
                    <Typewriter
                        options={{
                            strings: [
                                '<h3>Full Stack Developers</h3>',
                                '<h3>Quick Learner</h3>',
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h3>
                <h4 className='semi-bold lg:text-2xl text-lg px-4 md:px-8 leading-8 text-gray-800 dark:text-gray-200'>
                    I am Software Developer with strong passion and dedication for self - improvement. I love to
                    learn new technolgies and to create new stuffs related to them.
                </h4>
                <Social />
            </div>
        </div>
    )
}

export default About;
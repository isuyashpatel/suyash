import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';
import Social from '../social'
import suyash from '../../assets/suyash.png'

const About = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full h-[13vw] w-[13vw] relative mt-6 overflow-hidden'>
                <Image src={suyash} alt='Profile' className='object-cover' fill quality={90} />
            </div>

            <div className='flex flex-col gap-y-6 text-center mt-10'>
                <h2 className='lg:text-5xl text-2xl dark:text-white text-teal-600 font-medium'>
                    Suyash Patel
                </h2>
                <div>
                    <Typewriter
                        options={{
                            strings: [
                                '<h3>Full Stack Developer</h3>',
                                '<h3>Quick Learner</h3>',
                            ],
                            autoStart: true,
                            loop: true,
                            cursorClassName: 'hidden',
                            wrapperClassName: 'lg:text-2xl text-gray-800 dark:text-gray-200 text-lg w-screen overflow-y-hidden'
                        }}
                    />
                </div>
                <h4 className='semi-bold lg:text-2xl text-lg px-4 md:px-8 leading-8 text-gray-800 dark:text-gray-200 mt-6'>
                    I am Software Developer with strong passion and dedication for self - improvement. I love to
                    learn new technolgies and to create new stuffs related to them.
                </h4>
                <Social />
            </div>
        </div>
    )
}

export default About;
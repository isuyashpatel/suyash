'use client';
import Image from 'next/image';
import suyash from './api/hello/suyash.png';
import React, { Fragment, useCallback, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Navbar } from './component/nav';
import { Social } from './component/social';

export default function Home() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  const [darkMode, setDarkMode] = useState(false);



  //option theme
  const options = {
    fullScreen: true,
    background: {
      color: {
        value: darkMode ? "#000" : "#fff",
      },
    },
    fpsLimit: 180,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: darkMode ? "#fff" : "#000",
      },
      links: {
        color: darkMode ? "#fff" : "#000",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 3, max: 6 },
      },
    },
    detectRetina: true,
  }
  return (
    <Fragment>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <div className={darkMode ? 'dark' : ''}>
        <main className='relative px-10 md:px-20 lg:px-40 overflow-hidden'>
        <section className='min-h-screen'>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
        </section>
      </main>
    </div>
    </Fragment>
  );
}

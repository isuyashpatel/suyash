import { Fragment, useCallback, useState } from 'react'
import Particles from 'react-particles'
import { Navbar } from './nav'
import About from './about'
import { loadSlim } from 'tsparticles-slim'

const Index = () => {
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
                        <About />
                    </section>
                </main>
            </div>
        </Fragment>
    )
}

export default Index
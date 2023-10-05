import { Fragment } from 'react'

import { Navbar } from './nav'
import About from './about'
import { useRecoilState } from 'recoil'
import { themeState } from '../stateManagement/recoil'
import { Particlesjs } from './particles-js'

const Index = () => {
    const [darkMode, setDarkMode] = useRecoilState(themeState);
    return (
        <Fragment>
            <Particlesjs />
            <div className={darkMode ? 'dark' : ''}>
                <main className='relative px-10 md:px-20 lg:px-40 overflow-x-hidden'>
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
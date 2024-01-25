import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import Wallet from "../wallet"

export const Navbar = ({ darkMode, setDarkMode }) => {
    return (
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
                    {/* <a
                        target='_blank'
                        className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                        href='https://drive.google.com/file/d/1rdLlj9_2Wrwa1yLJWIw5GDm9NKlIMBFz/view?usp=sharing'>
                        Resume
                    </a> */}
                    <Wallet/>
                </li>
            </ul>
        </nav>
    )
}

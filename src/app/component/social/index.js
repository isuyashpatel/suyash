import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import { SiLeetcode } from "react-icons/si"
import { motion } from "framer-motion"
const Social = () => {
    return (
        <div className='lg:text-5xl text-2xl flex justify-center lg:gap-16 gap-10 text-gray-600 dark:text-gray-400'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
            >
                <a href='https://github.com/isuyashpatel' target={'_blank'}>
                    <AiFillGithub />
                </a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
            >
                <a href='https://leetcode.com/serpensortia/' target={'_blank'}>
                    <SiLeetcode />
                </a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
            >
                <a
                    href='https://www.linkedin.com/in/suyash-patel-0b6199191/'
                    target={'_blank'}>
                    <AiFillLinkedin />
                </a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
            >
                <a href='https://twitter.com/isuyashpatel' target={'_blank'}>
                    <AiFillTwitterCircle />
                </a>
            </motion.div>
        </div>
    )
}
export default Social;
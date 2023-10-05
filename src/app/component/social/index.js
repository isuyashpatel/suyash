import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import { SiLeetcode } from "react-icons/si"

const Social = () => {
    return (
        <div className='lg:text-5xl text-2xl flex justify-center lg:gap-16 gap-10 text-gray-600 dark:text-gray-400'>
            <a href='https://github.com/isuyashpatel' target={'_blank'}>
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
    )
}
export default Social;
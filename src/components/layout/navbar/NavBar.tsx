/**
 * NavBar
 */
import Image from 'next/image';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
// Application
import { H3, H4 } from 'components/mdx/Heading';

const Navbar = () => {
  return (
    <header>
      <div className='flex items-center p-6 py-2 bg-wash shadow-lg'>
        <div className='flex items-center flex-grow'>
          <Image
            src='/images/e-learning-logo.png'
            alt='logo'
            width={100}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
          <H3>Online Classroom</H3>
        </div>
        {/* Right Side */}
        <div className='flex items-center hidden md:flex absolute right-[100px] gap-x-[50px] whitespace-nowrap'>
          <div className='flex items-center pl-3 cursor-pointer hover:bg-wask-dark rounded-lg hover:shadow-lg transform hover:scale-125'>
            <H4>Demo</H4>
            <PlayCircleIcon className='h-6 pl-2 pr-2 opacity-50' />
          </div>
          <div className='pl-2 pr-2 cursor-pointer hover:bg-wask-dark rounded-lg hover:shadow-lg transform hover:scale-125'>
            <H4>Sign-in</H4>
          </div>
          <button className='bg-blue-500 shadow-lg hover:shadow-blue-500/50 pt-[6px] pl-[12px] pr-[12px] pb-[6px] rounded-lg text-white font-bold text-lg'>
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
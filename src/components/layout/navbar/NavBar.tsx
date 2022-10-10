/**
 * NavBar
 */
import Image from 'next/image';
// Application
import { H1 } from 'components/mdx/Heading';

const Navbar = () => {
  return (
    <div className='flex items-center bg-navbar p-6 flex-grow py-2'>
      <div className='flex items-center flex-grow sm:flex-grow-0'>
        <Image
          src='/images/e-learning-logo.png'
          alt='e-learning-logo'
          width={100}
          height={40}
          objectFit='contain'
          className='cursor-pointer'
        />
        <h1 className='text-2xl text-gray-10'>Online Classroom</h1>
      </div>
    </div>
  );
}

export default Navbar;
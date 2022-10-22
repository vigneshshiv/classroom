/**
 * NavBar
 */
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircleIcon } from 'components/icons/PlayCircleIcon';
import { UserCircleIcon } from 'components/icons/UserCircleIcon';
import { CgProfile } from 'react-icons/cg'
import { IoMdNotificationsOutline } from 'react-icons/io';
// Next Auth
import { signOut, useSession } from 'next-auth/react';
// Application
import { H4 } from 'components/mdx/Heading';

const Navbar = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  }
  
  return (
    <header className='sticky top-0 z-50 bg-wash'>
      <div className='flex items-center p-6 py-2 shadow-md'>
        <div className='flex items-center flex-grow'>
          <Image
            src='/images/e-learning-logo.png'
            alt='logo'
            width={80}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
          <h3 className='text-2xl leading-9 text-primary md:px-5 whitespace-nowrap'>Online Classroom</h3>
        </div>
        {/* Right Side */}
        <div className='flex items-center md:flex whitespace-nowrap space-x-10 justify-end mr-10'>
          <div className='items-center space-x-2 border-2 px-4 rounded-full cursor-pointer hidden md:flex shadow hover:shadow-md'>
            <H4>Demo</H4>
            <PlayCircleIcon size='lg' /> 
          </div>
          {session ? (
            <div className='flex items-center space-x-10'>
              <IoMdNotificationsOutline 
                className='h-6 w-6 cursor-pointer transform hover:scale-125' 
                title='notification' 
              />
              <CgProfile 
                className='h-6 w-6 cursor-pointer text-gray-70 hover:text-blue-400' 
                title='user profile' 
                href='#'
                onClick={handleSignOut}
              />
            </div>
            ) : (
            <>
              <Link href='/signin'>
                <div className='flex items-center space-x-2 border-2 px-4 rounded-full cursor-pointer shadow hover:shadow-md'>
                  <H4>Sign-in</H4>
                  <UserCircleIcon size='lg' />
                </div>
              </Link>
              <button 
                className='h-10 bg-blue-500 text-wash text-lg font-medium px-6 rounded-lg cursor-pointer hover:bg-blue-600 active:bg-blue-600'>
                Register
              </button>
            </>
            )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
/**
 * Application Header
 */
'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { LayoutGroup } from 'framer-motion';
// Application
import TitleAndMetaTags from './TitleAndMetaTags';
import { ToggleTheme } from 'components/theme/ToggleTheme';
import DropdownProfile from './DropdownProfile';
import { headerLinks } from 'shared/base.data';
import { ROUTES } from 'shared/constants';

const Header = (): JSX.Element => {
  const { data: session, status } = useSession();
  // Fetch User Data
  const fetchUserData = async () => {
    const response = await fetch(ROUTES.API.USER_DETAILS, {
      headers: { 
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify({ email: session?.user?.email })
    });
    return response.json();
  };
  // const { data: userDetails, isLoading } = useQuery([QueryKeys.USER_DETAILS], fetchUserData);

  return (
    <>
      <TitleAndMetaTags />
      <ul className='sm:flex pointer-events-auto items-center antialised font-medium text-xs tracking-widest'>
        <header
          className='top-0 w-screen fixed flex flex-row justify-between items-center tracking-widest
            h-16 md:h-20 px-12 bg-white dark:bg-gray-800 text-black dark:text-white z-50'
        >
          <Link href='/' className='flex items-center justify-center'>
            <span
              title='sparkle-emoji'
              className='text-2xl lg:text-4xl font-bold mr-2 hover:animate-ping'
            >
              💻
            </span>
            <h1 className='text-2xl lg:text-4xl font-bold mr-4 lg:mx-0 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-500'>
              CLASSROOM
            </h1>
          </Link>
          {Object.is(status, 'authenticated') 
            ? (
              <DropdownProfile />
            )
            : (
              <LayoutGroup>
                <div className='flex align-center justify-center ml-auto'>
                  {headerLinks.map((link) => (
                    <li 
                      key={link.title}
                      className='text-gray-700 dark:text-gray-100 text-sm lg:text-xl font-bold hover:underline underline-offset-4 px-4 py-2'
                    >
                      <Link href={link.slug}>{link.title}</Link>
                    </li>
                  ))}
                </div>
              </LayoutGroup>
            )}
          <div className='ml-4 sm:block'>
            <ToggleTheme />
          </div>
        </header>
      </ul>
    </>
  );
}

export default Header;
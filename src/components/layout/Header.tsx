/**
 * Application Header
 */
import React from 'react';
import Link from 'next/link';
import { LayoutGroup } from 'framer-motion';
// Application
import { ToggleTheme } from 'components/theme/ToggleTheme';
import TitleAndMetaTags from './TitleAndMetaTags';

const Header = (): JSX.Element => {
  const headerLinks = [
    { title: 'About', slug: '/about' },
    { title: 'Blog', slug: '/blog' },
    { title: 'Courses', slug: '/courses' },
    { title: 'Contact', slug: '/contact' },
    { title: 'Signin', slug: '/signin' }
  ];
  return (
    <>
      <TitleAndMetaTags />
      <ul className='sm:flex pointer-events-auto items-center antialised font-medium text-xs tracking-widest'>
        <header
          className='top-0 w-screen fixed flex flex-row justify-between items-center tracking-widest
            h-16 md:h-20 px-12 bg-white dark:bg-gray-800 text-black dark:text-white z-50'
        >
          <Link href='/'>
            <a className='flex items-center justify-center'>
              <span
                title='sparkle-emoji'
                className='text-2xl lg:text-4xl font-bold mr-2 hover:animate-ping'
              >
                ✨
              </span>
              <h1 className='text-2xl lg:text-4xl font-bold mr-4 lg:mx-0 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-500'>
                CLASSROOM
              </h1>
            </a>
          </Link>
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
            <div className='ml-4 sm:block'>
              <ToggleTheme />
            </div>
          </LayoutGroup>
        </header>
      </ul>
    </>
  );
}

export default Header;
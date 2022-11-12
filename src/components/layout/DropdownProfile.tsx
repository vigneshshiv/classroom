/**
 * Dropdown Profile
 */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import cn from 'classnames';
// Application
import RobotoSlabFont from 'components/fonts/RobotoFont';
import { SettingsIcon } from 'components/icons/SettingsIcon';
import { SignoutIcon } from 'components/icons/SignoutIcon';

const DropdownProfile = (): JSX.Element => {
  const { data: session, status } = useSession();
  const [show, setShow] = useState(false);
  // Default Profile Photo
  const profilePhoto = session?.user?.image ?? `https://avatars.dicebear.com/api/avataaars/classroom.svg`;

  return (
    <div className='relative mx-2 ml-auto'>
      <div className='relative h-8 w-8'>
        <Image 
          src={profilePhoto}
          alt='Profile Image'
          width={50}
          height={50}
          priority
          onClick={() => setShow(!show)}
          className='h-8 w-8 rounded-full cursor-pointer'
        />
      </div>
      <div 
        className={cn(
          'absolute -left-[140px] z-10 mt-4 bg-white dark:bg-gray-700 overflow-hidden rounded shadow-[1px_1px_5px_rgba(0,0,0,0.1)] ease-out',
          RobotoSlabFont.className,
          show ? '!opacity-100 transition-[transition,opacity] duration-200' : 'opacity-0 pointer-events-none transition-[transition,opacity] duration-200'
        )}
      >
        <div className='p-3 space-y-1'>
          <div className='text-sm tracking-wider text-gray-700 dark:text-gray-100 capitalize leading-relaxed'>{session?.user?.name ?? 'Rick Jhonson'}</div>
          <div className='text-xs font-light tracking-wider text-gray-700 dark:text-gray-100 truncate leading-5'>{session?.user?.email ?? 'rick@classroom.com'}</div>
        </div>
        
        <div>
          <Link 
            href='/'
            className='flex item-center space-x-2 px-4 py-2 border-t dark:border-t-gray-500 text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300'
          >
            <SettingsIcon size='lg' />
            <span className='text-sm tracking-wider'>Settings</span>
          </Link>
        </div>
        <div
          onClick={() => signOut()}
          className='flex items-center space-x-2 px-4 py-2 border-t dark:border-t-gray-500 text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer'
        >
          <SignoutIcon size='lg' />
          <span className='text-sm tracking-wider'>Sign Out</span>
        </div>
      </div>
    </div>
  );
}

export default DropdownProfile;
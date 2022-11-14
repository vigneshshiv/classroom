/**
 * Dropdown Profile
 */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import cn from 'classnames';
// Application
import { SettingsIcon } from 'components/icons/SettingsIcon';
import { SignoutIcon } from 'components/icons/SignoutIcon';
import { ChevronUpIcon } from 'components/icons/ChevronUpIcon';
import { NotesIcon } from 'components/icons/NotesIcon';
import { CalendarIcon } from 'components/icons/CalendarIcon';
import { CreditCardIcon } from 'components/icons/CreditCardIcon';
import RobotoSlabFont from 'components/fonts/RobotoFont';
import TelexFont from 'components/fonts/TelexFont';

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
          className='h-7 w-7 rounded-full cursor-pointer'
        />
      </div>
      <div 
        className={cn(
          'absolute w-44 -left-[84px] z-10 mt-4 bg-white dark:bg-gray-700 overflow-hidden rounded shadow-[1px_1px_5px_rgba(0,0,0,0.1)] ease-out',
          show ? '!opacity-100 transition-[transition,opacity] duration-200' : 'opacity-0 pointer-events-none transition-[transition,opacity] duration-200'
        )}
      >
        {/* <ChevronUpIcon size='lg' /> */}
        <div className='p-3 space-y-1 border-b dark:border-b-gray-500'>
          <div className='text-sm tracking-wider text-gray-700 dark:text-gray-100 capitalize'>{session?.user?.name ?? 'Rick Jhonson'}</div>
          <div className={cn(TelexFont.className, 'text-xs tracking-wider text-gray-700 dark:text-gray-100 truncate')}>{session?.user?.email ?? 'rick@classroom.com'}</div>
        </div>
        <div>
          <Link 
            href='/'
            className='flex item-center space-x-2.5 px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300'
          >
            <SettingsIcon size='lg' />
            <span className={cn(TelexFont.className, 'text-sm tracking-wider')}>Settings</span>
          </Link>
        </div>
        <div>
          <Link 
            href='/'
            className='flex item-center space-x-2.5 px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300'
          >
            <NotesIcon size='lg' />
            <span className={cn(TelexFont.className, 'text-sm tracking-wider')}>Notes</span>
          </Link>
        </div>
        <div>
          <Link 
            href='/'
            className='flex item-center space-x-2.5 px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300'
          >
            <CalendarIcon size='lg' />
            <span className={cn(TelexFont.className, 'text-sm tracking-wider')}>Calendar</span>
          </Link>
        </div>
        <div>
          <Link 
            href='/'
            className='flex item-center space-x-2.5 px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300'
          >
            <CreditCardIcon size='lg' />
            <span className={cn(TelexFont.className, 'text-sm tracking-wider')}>Subscription</span>
          </Link>
        </div>
        <div
          onClick={() => signOut()}
          className='flex items-center space-x-2.5 px-3 py-2 border-t dark:border-t-gray-500 text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer'
        >
          <SignoutIcon size='lg' />
          <span className={cn(TelexFont.className, 'text-sm tracking-wider')}>Sign Out</span>
        </div>
      </div>
    </div>
  );
}

export default DropdownProfile;
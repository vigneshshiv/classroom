/**
 * Application Footer
 */
import Link from 'next/link';
import cn from 'classnames';
// Application
import TelexFont from 'components/fonts/TelexFont';

const Footer = (): JSX.Element => {
  return (
    <footer className={cn('flex items-center justify-center', 
        TelexFont.className, 'text-gray-700 dark:text-gray-50 p-6 text-md lg:text-lg')}>
      <span className='flex'>© {new Date().getFullYear()}, Built with ☕️ & 💖 by{' '}</span>
      <Link href='/about'>
        <span className='font-bold hover:underline'>Vignesh Shiv</span>
      </Link>
    </footer>
  );
}

export default Footer;
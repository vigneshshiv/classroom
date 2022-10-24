/**
 * Application Footer
 */
import Link from 'next/link';

const Footer = (): JSX.Element => {
  return (
    <footer className='font-telex text-center text-gray-700 dark:text-gray-50 pin-b p-6 text-md lg:text-lg'>
      © {new Date().getFullYear()}, Built with ☕️ & 💖 by{' '}
      <Link href='/about'>
        <span className='font-bold hover:underline'>Vignesh Shiv</span>
      </Link>
    </footer>
  );
}

export default Footer;
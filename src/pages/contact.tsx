/**
 * Contact
 */
import cn from 'classnames';
// Application
import RobotoSlabFont from 'components/fonts/RobotoFont';
import TelexFont from 'components/fonts/TelexFont';

const Contact = (): JSX.Element => {
  return (
    <div className='relative'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className={cn(RobotoSlabFont.className, 'uppercase text-7xl sm:text-9xl font-bold text-center')}>
          <span className='text-stroke'>Lets</span>
          <span className='text-indigo-400 dark:text-green-400'>Talk</span>
        </div>
        <div 
          className='px-24 text-sm md:text-base mt-8 opacity-85'
          style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
        >
          <div className='relative text-3xl lg:text-4xl text-gray tracking-wide my-8'>
            <a
              className={cn('relative w-full rounded-lg no-underline bg-linear-gradient(to right, #f6d365 0%, #fda085 100%)', RobotoSlabFont.className)}
              href='mailto:vichuviky@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Get in touch 💌
            </a>
          </div>
          <div 
            className='relative text-xl md:text-2xl lg:text-3xl inline-block'
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}  
          >
            <span className='italic'>
              Dont'be a {' '}
              <span className='line-through'>stranger</span>.
            </span>
            <div className='my-4'>
              Say <a href='mailto:vichuviky@gmail.com'>Hi</a>{' '}
              <span className='text-2xl'>👋🏻</span> or follow me on:{' '}
            </div>
            <a
              className={cn(TelexFont.className, 'font-bold hover:underline')}
              href='https://www.instagram.com/vigneshshiv'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>{' '}
            📸 ,{' '}
            <a
              className={cn(TelexFont.className, 'font-bold hover:underline')}
              href='https://www.github.com/vigneshshiv'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>{' '}
            💻 or{' '}
            <a
              className={cn(TelexFont.className, 'font-bold hover:underline')}
              href='https://www.twitter.com/vikyshiv'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>{' '}
            🐦
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
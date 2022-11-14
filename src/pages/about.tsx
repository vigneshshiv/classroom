/**
 * About
 */
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// Application
import Loader from 'components/common/Loader';
import Hero from 'components/common/Hero';
import { P } from 'components/common/MDXComponent';
import RobotoSlabFont from 'components/fonts/RobotoFont';
import TelexFont from 'components/fonts/TelexFont';
import { async } from 'utils/AppUtils';


const variants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      ease: 'easeInOut',
      duration: 1
    }
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -100,
    transition: {
      staggerChildren: 0.5
    }
  }
};

const About = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    let timeout = 0;
    if (!isLoading) {
      timeout = async(() => controls.start('enter'), 1000);
    } else {
      controls.start('hidden');
      timeout = async(() => setIsLoading(false), 2000);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [isLoading, controls]);

  return (
    <div className='relative'>
      <AnimatePresence initial={false}>
        {isLoading ? <Loader /> : null}
      </AnimatePresence>
      <motion.section
        variants={variants}
        initial='hidden'
        animate={controls}
        exit='exit'
        data-scroll-section
        className='w-full h-screen grid place-content-center mb-16'
      >
        <div className='py-8'>
          <Hero image='/images/shiv-focus-mode.png' height={250} width={250} />
        </div>
        <div className='flex flex-col items-center md:items-start space-y-6 px-8 text-lg'>
          <div className='inline-flex space-x-2 items-center'>
            <div className='w-16 hidden md:flex h-0.5 bg-gray-700 dark:bg-white'></div>
            <P className='uppercase text-sm font-medium text-gray-700 dark:text-white tracking-widest leading-snug'>
              Welcome to my <span className='line-through'>nerd</span> dev portfolio 🤓
            </P>
          </div>
          <div className='inline-flex flex-col items-center md:items-start uppercase text-4xl md:text-7xl font-bold tracking-widest leading-10'>
            <span className={cn(RobotoSlabFont.className, 'text-stroke stroke-gray-500 dark:stroke-white')}>
              Shiv
            </span>
            <div className={cn(RobotoSlabFont.className, 'text-indigo-400 dark:text-green-300 text-2xl md:text-7xl')}>
              Creative Engineer
            </div>
          </div>
          <P className={cn(TelexFont.className, 'max-w-3xl text-center md:text-left')}>
            My name is Vignesh Shiv and I am a Software Engineer with a knack for 
            Design Systems.
            <br /> I truly enjoy thinking about <i>Usability</i>, and love to
            make great Designs come to life through <code>code</code>.
          </P>
          <P className={cn(TelexFont.className, 'max-w-3xl text-center md:text-left')}>
            Having 8+ Years of experience in{' '}
            <span className='font-bold text-indigo-400 dark:text-green-400 hover:underline'>Banking</span>,{' '} 
            <span className='font-bold text-indigo-400 dark:text-green-400 hover:underline'>Airline</span>{' '}
            and Automobile Industry. Expertise in building scalable Microservices architecture applications.
          </P>
          <P className={cn(TelexFont.className, 'text-center max-w-3xl md:text-left')}>
            In my spare time I enjoy travelling outdoors 🚗, shopping 🛒, and 
            reading books 📚 about personal finance & self-improvement ✨, and playing table tennis 🏓.{' '}
          </P>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
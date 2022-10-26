/**
 * Hero Image Component
 */
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const getRandomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const Hero = ({ image, height, width }: {
  image: string;
  height?: number | string;
  width?: number | string;
}): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      whileHover={{
        rotate: getRandomInt(0, 2) < 1 ? -5 : 5,
        scale: 1.2,
        transition: { type: 'spring', duration: 0.3, bounce: 0.25 }
      }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ opacity: 1 }}
      className='flex flex-col items-center justify-center pt-24'
    >
      <Image
        src={image}
        alt='hero-image'
        layout='fixed'
        height={height}
        width={width}
        priority
        quality={70}
      />
    </motion.div>
  );
}

export default Hero;
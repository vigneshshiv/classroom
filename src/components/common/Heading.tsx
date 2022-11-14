/**
 * Heading Tags
 */
import * as React from 'react';

export const H1 = (p: JSX.IntrinsicElements['h1']) => ( 
  <h1 className='text-4xl leading-tight font-semibold text-gray-800 dark:text-gray-200 drop-shadow' {...p} />
);

export const H2 = (p: JSX.IntrinsicElements['h2']) => ( 
  <h2 className='text-3xl leading-9 font-semibold text-gray-800 dark:text-gray-200 drop-shadow-sm' {...p} />
);

export const H3 = (p: JSX.IntrinsicElements['h3']) => ( 
  <h3 className='text-2xl leading-8 font-semibold text-gray-800 dark:text-gray-200 drop-shadow-sm' {...p} />
);

export const H4 = (p: JSX.IntrinsicElements['h4']) => ( 
  <h4 className='text-xl leading-7 font-semibold text-gray-800 dark:text-gray-200 drop-shadow-sm' {...p} />
);
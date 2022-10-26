/**
 * Heading Tags
 */
import * as React from 'react';

export const H1 = (p: JSX.IntrinsicElements['h1']) => ( 
  <h1 className='text-5xl font-bold leading-tight text-primary' {...p} />
);

export const H2 = (p: JSX.IntrinsicElements['h2']) => ( 
  <h2 className='text-3xl font-bold leading-10 text-primary' {...p} />
);

export const H3 = (p: JSX.IntrinsicElements['h3']) => ( 
  <h3 className='text-2xl leading-9 text-primary' {...p} />
);

export const H4 = (p: JSX.IntrinsicElements['h4']) => ( 
  <h4 className='text-xl leading-9 text-gray-60' {...p} />
);
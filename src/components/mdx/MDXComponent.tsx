/**
 * MDX Component for TSX and Markdown
 * 
 * Incase, if mdx is used for text editor or showing md syntax with JSX elements
 */
import * as React from 'react';

// TODO: Default styles to be finalized for all tags

export const P = (p: JSX.IntrinsicElements['p']) => ( 
  <p className='font-bold' {...p} />
);

export const OL = (p: JSX.IntrinsicElements['ol']) => (
  <ol className='ml-6 my-3 list-decimal' {...p} />
);

export const LI = (p: JSX.IntrinsicElements['li']) => (
  <li className='leading-relaxed mb-1' {...p} />
);

export const UL = (p: JSX.IntrinsicElements['ul']) => (
  <ul className='ml-6 my-3 list-disc' {...p} />
);

export const Divider = () => (
  <hr className='my-6 block border-b border-border dark:border-border-dark' />
);

export const Strong = (strong: JSX.IntrinsicElements['strong']) => (
  <strong className='font-bold' {...strong} />
);

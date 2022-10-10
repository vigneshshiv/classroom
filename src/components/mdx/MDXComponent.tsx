/**
 * MDX Component for TSX and Markdown
 * 
 * Incase, if mdx is used for text editor or showing md syntax with JSX elements
 */

import { H1, H2, H3, H4 } from './Heading';

const P = (p: JSX.IntrinsicElements['p']) => ( 
  <p className='whitespace-pre-wrap my-4' {...p} />
);

const OL = (p: JSX.IntrinsicElements['ol']) => (
  <ol className='ml-6 my-3 list-decimal' {...p} />
);

const LI = (p: JSX.IntrinsicElements['li']) => (
  <li className='leading-relaxed mb-1' {...p} />
);

const UL = (p: JSX.IntrinsicElements['ul']) => (
  <ul className='ml-6 my-3 list-disc' {...p} />
);

const Divider = () => (
  <hr className='my-6 block border-b border-border dark:border-border-dark' />
);

const Strong = (strong: JSX.IntrinsicElements['strong']) => (
  <strong className='font-bold' {...strong} />
);

export const MDXComponents = {
  p: P,
  ol: OL,
  ul: UL,
  li: LI,
  hr: Divider,
  strong: Strong,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4
};
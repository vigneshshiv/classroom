/**
 * Heading Tags
 */
import cn from 'classnames';
import * as React from 'react';

export interface HeadingProps {
  id?: string,
  className?: string,
  ref?: React.RefObject<HTMLDivElement>,
  isPageAnchor?: boolean,
  children: React.ReactNode // Title of Heading tags
}

export const Heading = (props: HeadingProps) => {
  return (
    <div id={props.id} ref={props.ref} className={cn('mdx-heading', props.className)}>
      {props.children}
    </div>
  );
}

export const H1 = (p: JSX.IntrinsicElements['h1']) => ( 
  <h1 className='text-5xl font-bold leading-tight' {...p} />
);

export const H2 = (p: JSX.IntrinsicElements['h2']) => ( 
  <h2 className='text-3xl leading-10 text-primary dark:text-primary-dark font-bold my-6' {...p} />
);

export const H3 = (p: JSX.IntrinsicElements['h3']) => ( 
  <h3 className='text-2xl leading-9 text-primary dark:text-primary-dark font-bold my-6' {...p} />
);

export const H4 = (p: JSX.IntrinsicElements['h4']) => ( 
  <h4 className='text-xl font-bold leading-9 my-4' {...p} />
);

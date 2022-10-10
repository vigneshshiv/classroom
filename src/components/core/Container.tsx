/**
 * Container Component
 */
import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Container = ({className, ...props}: props) => {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props} />
  );
}

export default Container;
/**
 * Title
 */
import { ReactNode } from 'react';
import cn from 'classnames';
// Application
import RobotoSlabFont from 'components/fonts/RobotoFont';

const Title = ({ title }: { title: ReactNode }): JSX.Element => {
  return (
    <h2 className={cn(RobotoSlabFont.className, 'text-2xl mt-24 mb-10 text-gray-800 dark:text-gray-50')}>
      { title }
    </h2>
  );
}

export default Title;
/**
 * Chevron Down
 */
import cn from 'classnames';
import { withSize } from './IconStyle';

export const ChevronUpIcon = withSize(({ sizeClass }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1} 
    stroke="currentColor" 
    className={cn(sizeClass, 'text-gray-700 dark:text-gray-100')}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
));
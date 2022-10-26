/**
 * 404 - Not found
 */
import type { NextPage } from 'next';
// Application
import Container from 'components/core/Container';
import { H1 } from '../components/common/Heading';

const NotFound: NextPage = () => {
    return (
      <>
        <div className='pt-40 text-center'>
          <h1 className='font-medium text-6xl'>
            <span className='relative whitespace-nowrap text-blue-600'>
              404{' '}
            </span>
          </h1>
          <H1>Page not found</H1>
        </div>
      </>
    );
};

export default NotFound;
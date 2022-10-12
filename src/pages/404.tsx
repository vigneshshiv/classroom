/**
 * 404 - Not found
 */
import type { NextPage } from 'next';
// Application
import Container from 'components/core/Container';
import { H1 } from '../components/mdx/Heading';

const NotFound: NextPage = () => {
    return (
      <>
        <Container className='pt-40 text-center'>
          <h1 className='font-medium text-6xl'>
            <span className='relative whitespace-nowrap text-blue-600'>
              404{' '}
            </span>
          </h1>
          <H1>Page not found</H1>
        </Container>
      </>
    );
};

export default NotFound;
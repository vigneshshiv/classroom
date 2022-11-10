/**
 * Layout
 */
import { ReactNode, useRef } from 'react';
import { useSession } from 'next-auth/react';
// Application
import Header from './Header';
import Footer from './Footer';
import Loader from 'components/common/Loader';

const Layout = ({ children }: {children: ReactNode}): JSX.Element => {
  const containerRef = useRef(null);
  const { data: session, status } = useSession();

  if (Object.is(status, 'loading')) {
    return <Loader />;
  }

  return (
    <>
      <div data-scroll-container className='w-screen' ref={containerRef}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
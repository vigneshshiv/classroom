/**
 * Layout
 */
import { ReactNode, useRef } from 'react';
import { useSession } from 'next-auth/react';
// Application
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: {children: ReactNode}): JSX.Element => {
  const containerRef = useRef(null);
  const { data: session, status } = useSession();
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
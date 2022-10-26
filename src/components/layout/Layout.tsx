/**
 * Layout
 */
import { ReactNode, useRef } from 'react';
import { useSession } from 'next-auth/react';
// Application
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: {children: ReactNode}): JSX.Element => {
  const _container_ref_ = useRef(null);
  const { data: session, status } = useSession();
  return (
    <>
      <div data-scroll-container className='w-screen' ref={_container_ref_}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
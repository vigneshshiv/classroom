/**
 * Layout
 */
import React, { ReactNode, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { LayoutGroup } from 'framer-motion';
// Application
import Header from './Header';
import Footer from './Footer';
import Loader from 'components/loader/Loader';

const Layout = ({ children }: {children: ReactNode}): JSX.Element => {
  const _container_ref_ = useRef(null);
  const { data: session, status } = useSession();
  return (
    <LayoutGroup id='crossfade'>
      <div data-scroll-container className='w-screen' ref={_container_ref_}>
        <Header />
        {children}
      </div>
      <Footer />
    </LayoutGroup>
  );
}

export default Layout;
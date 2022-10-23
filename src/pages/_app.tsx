// React
import type { AppProps } from 'next/app';
// Next Auth
import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';
// Application
import { PageProps } from 'components/types/types';
// CSS
import '../styles/globals.css';

// TODO: Layout Group & Animate Presence
function Classroom({ 
  Component, 
  pageProps: {session, ...pageProps} 
}: AppProps<{session: Session, pageProps: PageProps}>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default Classroom;

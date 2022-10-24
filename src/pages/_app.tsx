// React
import type { AppProps } from 'next/app';
// Next Auth
import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';
// Application
import { PageProps } from 'components/types/types';
// CSS
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

// TODO: Layout Group & Animate Presence
function Classroom({ 
  Component, 
  pageProps: {session, ...pageProps} 
}: AppProps<{session: Session, pageProps: PageProps}>) {
  return (
    <ThemeProvider attribute='class'>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default Classroom;

// React
import type { AppProps } from 'next/app';
// Next Auth
import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';
import { ThemeProvider } from 'next-themes';
// Application
import Layout from 'components/layout/Layout';
// CSS
import '../styles/globals.css';

// TODO: Layout Group & Animate Presence
function Classroom({ 
  Component, 
  pageProps: {session, ...pageProps} 
}: AppProps<{session: Session, pageProps: AppProps}>) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default Classroom;

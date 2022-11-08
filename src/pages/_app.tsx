// React
import type { AppProps } from 'next/app';
// Next Auth
import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';
// Application
import ThemeProvider from 'components/theme/ThemeProvider';
import Layout from 'components/layout/Layout';
// CSS
import '../styles/globals.css';

function Classroom({ 
  Component, 
  pageProps: {session, ...pageProps} 
}: AppProps<{session: Session, pageProps: AppProps}>) {
  return (
    <>
      <ThemeProvider />
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default Classroom;

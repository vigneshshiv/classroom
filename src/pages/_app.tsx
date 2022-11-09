// React
import type { AppProps } from 'next/app';
// Next Auth
import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Application
import ThemeProvider from 'components/theme/ThemeProvider';
import Layout from 'components/layout/Layout';
// CSS
import '../styles/globals.css';

function Classroom({ 
  Component, 
  pageProps: {session, ...pageProps} 
}: AppProps<{session: Session, pageProps: AppProps}>) {
  // TODO: prevent shared cache between tests
  const queryClient = new QueryClient();
  return (
    <>
      <ThemeProvider />
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}

export default Classroom;

// React
import type { AppProps } from 'next/app';
import { createContext, useContext, useEffect, useState } from 'react';
// Application
import { PageProps, User } from 'components/types/types';
import { getCache } from 'shared/shared.data';
import { SessionContext } from 'components/contexts/SessionContext';
// CSS
import '../styles/globals.css';

const SIGNIN_KEY = 'session_data';

function Classroom({ Component, pageProps }: AppProps<PageProps>) {
  // TODO: Better to use Session Provider
  // Top level hierarchy to pass props to children
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    // Component mounted
    const session: User | null = getCache(SIGNIN_KEY) as User;
    console.log(`App User data - ${JSON.stringify(session)}`);
    setUser(session);
    return () => {
      console.log(`app clean up`);
    }
  }, []);

  // If session is available, create a Session Provider context
  if (user && user.loggedIn) {
    console.log(`SessionProvider block`);
  }
  // const data = useContext(SessionContext);
  // const SessionContext = createContext(user);
  return (
    <SessionContext.Provider value={user as any}>
      <Component {...pageProps} />
    </SessionContext.Provider>
  );
  // return <Component {...pageProps} />
}

export default Classroom;

// React
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
// Application
import { PageProps, User } from 'components/types/types';
import { getCache } from 'shared/shared.data';
import { SessionContext } from 'components/contexts/SessionContext';
import { StorageManager } from 'shared/base.data';
// CSS
import '../styles/globals.css';

function Classroom({ Component, pageProps }: AppProps<PageProps>) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    // Component mounted
    const session: User | null = getCache(StorageManager.SESSION_KEY);
    setUser(session);
    return () => {};
  }, []);
  return (
    <SessionContext.Provider value={user as any}>
      <Component {...pageProps} />
    </SessionContext.Provider>
  );
}

export default Classroom;

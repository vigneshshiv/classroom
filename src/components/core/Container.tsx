/**
 * Initiate Page with a Container component, that holds Page Title and main content, meta data is optional.
 */
import { ReactNode } from 'react';
import TitleAndMetaTags from 'components/layout/TitleAndMetaTags';

type props = {
  children: ReactNode;
  customMeta?: any;
}

const Container = ({ children, customMeta }: props) => {
  return (
    <>
      <TitleAndMetaTags customMeta={customMeta} />
      {/* Main document section */}
      <main className="container mx-auto px-12 sm:px-0">
        {children}
      </main>
    </>
  );
}

export default Container;
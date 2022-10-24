/**
 * Initiate Page with a Container component, that holds Page Title and main content, meta data is optional.
 */
import { ReactNode } from 'react';
import TitleAndMetaTags from 'components/layout/TitleAndMetaTags';
import Title from 'components/title/Title';

type props = {
  children: ReactNode;
  title: ReactNode;
  customMeta?: any;
}

const Container = ({ children, title, customMeta }: props) => {
  return (
    <>
      <TitleAndMetaTags customMeta={customMeta} />
      <Title title={title} />
      {/* Main document section */}
      <main className="container mx-auto px-12 sm:px-0">
        {children}
      </main>
    </>
  );
}

export default Container;
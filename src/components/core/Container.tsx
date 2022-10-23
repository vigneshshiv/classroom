/**
 * Container Component
 */
import { ReactNode } from 'react';
import TitleAndMetaTags from 'components/layout/header/TitleAndMetaTags';

type props = {
  children: ReactNode;
  customMeta: any;
}

const Container = ({ children, customMeta }: props) => {
  return (
    <>
      <TitleAndMetaTags customMeta={customMeta} />
      <main className="container mx-auto px-12 sm:px-0">
        {children}
      </main>
    </>
  );
}

export default Container;
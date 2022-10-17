/**
 * Page for an application
 * - Holds Navbar, Header, Footer, Sidebar & Container (Actual content)
 */
import { ReactNode } from 'react';
// Application
import { PageProps } from 'components/types/types';
import Navbar from 'components/layout/navbar/Navbar';

const Page = ({children, pageProps}: {children: ReactNode; pageProps: PageProps}) => {
  // Holds an Router Component
  return (
    <>
     {/* Navbar and Menu */}
     <Navbar pageProps={pageProps} />

     {/* Header should hold tilte and Heading etc */}
     {/* <h2>Header Section Heading</h2> */}

     {/* Sidebar */}
     {/* <h3>Side bar heading</h3> */}

     {/* Main document section */}
     <main>
      <div>
        {children}
      </div>
     </main>
     {/* Footer */}

     {/* <h1>Footer Heading</h1> */}

    </>
  ); 
}

export default Page;
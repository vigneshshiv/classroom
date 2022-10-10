/**
 * Page for an application
 * - Holds Navbar, Header, Footer, Sidebar & Container (Actual content)
 */
import NavBar from 'components/layout/navbar/NavBar';
import * as React from 'react';

/**
 * Theme for application
 */
declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme: (theme: string) => void;
  }
}

interface PageProps {
  children: React.ReactNode;
}

const Page = ({children}: PageProps) => {
  // Holds an Router Component
  return (
    <>
     {/* Navbar and Menu */}
     <NavBar />

     {/* Header should hold tilte and Heading etc */}
     <h2>Header Section Heading</h2>

     {/* Sidebar */}
     <h3>Side bar heading</h3>

     {/* Main document section */}
     <main>
      <div>
        {children}
      </div>
     </main>
     {/* Footer */}

     <h1>Footer Heading</h1>

    </>
  ); 
}

export default Page;
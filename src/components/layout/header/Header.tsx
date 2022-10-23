/**
 * Application Header
 */
import React from 'react';
import Link from 'next/link';
// Application
import { ToggleTheme } from 'components/theme/ToggleTheme';
import TitleAndMetaTags from './TitleAndMetaTags';

const Header = (): JSX.Element => {
  return (
    <>
      <TitleAndMetaTags />
      <ul>
        
      </ul>
    </>
  );
}

export default Header;
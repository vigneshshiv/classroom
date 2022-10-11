/**
 * Application Theme Contexts
 */
import { useState } from 'react';

/**
 * Theme for application
 */
declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme: (theme: string) => void;
  }
}

const ThemeContext = () => {
  // TODO:
  const [_theme, setTheme] = useState('');
}

export default ThemeContext;

/**
 * Application Theme Contexts
 */

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
}

export default ThemeContext;

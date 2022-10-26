/**
 * Document Head section holds title and meta tags
 */
import { Html, Head, Main, NextScript } from 'next/document';

// TODO: Style component handle at client side (getInitialProps)
// Reference: https://nextjs.org/docs/advanced-features/custom-document

const _Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500&family=Telex&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className='dark:bg-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _Document;
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
        <link rel='icon' href='/favicon.ico' />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500&family=Telex&display=swap"
          rel="stylesheet"
        />

        {/* TODO: Stylesheet update */}

        <meta
          name='description' 
          content='Online Classroom app with built-in Live video streaming and integrated Data Storage with AWS' 
        />
        {/* Open Graph Meta Tags */}
        <meta property='og:title' content='Classroom' />
        <meta
          name='og:description' 
          content='Online Classroom app with built-in Live video streaming and integrated Data Storage with AWS' 
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://github.com/vigneshshiv/' />
        <meta 
          property='og:image'
          content='https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png'
        />
        {/* Theme color Meta Tags */}
        <meta name='theme-color' content='#2d7af0' />
        {/* Twitter Meta Tags */}
        <meta name='twitter:title' content='Classroom' />
        <meta
          name='twitter:description' 
          content='Online Classroom app with built-in Live video streaming and integrated Data Storage with AWS' 
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://github.com/vigneshshiv' />
        <meta 
          property='og:image'
          content='https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png'
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
/**
 * Document Head section holds title and meta tags
 */
import { Html, Head, Main, NextScript } from 'next/document';

const _Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        
        {/* TODO: Stylesheet update */}

        <meta
          name='description' 
          content='Online Classroom app with built-in Live video streaming and integrated with Data Storage' 
        />
        {/* Open Graph Meta Tags */}
        <meta property='og:title' content='Classroom' />
        <meta
          name='og:description' 
          content='Online Classroom app with built-in Live video streaming and integrated with Data Storage' 
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
          content='Online Classroom app with built-in Live video streaming and integrated with Data Storage' 
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://github.com/vigneshshiv' />
        <meta 
          property='og:image'
          content='https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png'
        /> 
      </Head>
      <body className='flex h-full flex-col bg-gray-100'>
        {/* Theme change */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _Document;